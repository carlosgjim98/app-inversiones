import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ModalController } from '@ionic/angular';
import { ModalCapturaComponent } from 'src/app/components/modal-captura/modal-captura.component';
import ChartAnnotation from 'chartjs-plugin-annotation';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {
  selectedYear: string = '2024';
  barChart: any;
  pieChart: any;
  modalShown: boolean = false;  // Variable para controlar si el modal ya fue mostrado

  constructor(private modalController: ModalController) {}

  async showModal() {
    // Verificar si el modal ya ha sido mostrado
    if (this.modalShown) {
      return; // Si ya se mostró, no hacer nada
    }

    const modal = await this.modalController.create({
      component: ModalCapturaComponent, // Componente del modal
      cssClass: 'custom-modal-class', // Clase para estilos adicionales
      backdropDismiss: false, // Evita que se cierre al tocar fuera
    });

    await modal.present();

    // Cambiar la bandera a true después de mostrar el modal
    this.modalShown = true;
  }

  ngOnInit() {
    this.createBarChart();
    this.createPieChart();
    this.showModal(); // Mostrar el modal al inicializar la página
  }

  ngOnDestroy() {
    // Destruir los gráficos al salir de la página
    if (this.barChart) {
      Chart.getChart("barChart")?.destroy();  // Destruir el gráfico de barras
    }
    if (this.pieChart) {
      Chart.getChart("pieChart")?.destroy();  // Destruir el gráfico de pastel
    }
  }

  onYearChange() {
    this.updateBarChartData();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    // Destruir el gráfico de barras existente si ya existe
    if (this.barChart) {
      Chart.getChart("barChart")?.destroy();
    }

    // Crear un degradado
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.height);
    gradient.addColorStop(0, '#D1B63B');
    gradient.addColorStop(0.5, '#83732F');
    gradient.addColorStop(1, '#4A4222');

    // Crear la nueva instancia del gráfico de barras
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: 'Crecimiento',
            data: [25, 30, 27, 32, 29, 33, 28, 35, 30, 38, 37, 80], // Datos de ejemplo
            backgroundColor: gradient,
            barThickness: 12,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            display: false, // Hace que no se muestren los número sobre la línea de la gráfica
          },
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 0,
            max: 60,
            ticks: {
              stepSize: 20,
              color: '#D9D9D9',
              callback: function(value) {
                return String(Number(value) - 20) + '%';
              },
            },
            grid: {
              color: '#444',
            },
          },
          x: {
            ticks: {
              color: '#D9D9D9',
            },
            grid: {
              color: 'transparent',
            },
          },
        },
      },
    });
  }

  private createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
  
    // Destruir el gráfico existente si ya existe
    if (this.pieChart) {
      Chart.getChart("pieChart")?.destroy();
    }
  
    // Obtener el contexto 2D
    const context = ctx.getContext('2d');
    if (!context) {
      console.error("No se pudo obtener el contexto del canvas");
      return;
    }
  
    // Crear gradientes para los colores
    const gradient1 = context.createLinearGradient(0, 0, ctx.width, ctx.height);
    gradient1.addColorStop(0, '#AFD7F8');
    gradient1.addColorStop(0.5, '#93c7f4');
    gradient1.addColorStop(1, '#c8e2f8');
  
    const gradient2 = context.createLinearGradient(0, 0, ctx.width, ctx.height);
    gradient2.addColorStop(0, '#0A4E88');
    gradient2.addColorStop(1, '#183d61');
  
    const gradient3 = context.createLinearGradient(0, 0, ctx.width, ctx.height);
    gradient3.addColorStop(0, '#2f89d5');
    gradient3.addColorStop(0.5, '#2f89d5');
    gradient3.addColorStop(1, '#6faadc');
  
    const gradient4 = context.createLinearGradient(0, 0, ctx.width, ctx.height);
    gradient4.addColorStop(0, '#B8A44F');
    gradient4.addColorStop(0.5, '#8C762F');
    gradient4.addColorStop(1, '#4A4222');
  
    // Crear el gráfico
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['5%', '15%', '30%', '50%'],
        datasets: [
          {
            data: [5, 15, 30, 50],
            backgroundColor: [gradient1, gradient2, gradient3, gradient4],
            borderWidth: 0,
            offset: Array(4).fill(0), // Inicialmente, todas las cuñas están sin desplazamiento
          },
        ],
      },
      options: {
        rotation: -90, // Rotación inicial
        circumference: 180, // Solo media circunferencia
        responsive: true,
        plugins: {
          legend: {
            display: false, // No mostrar leyenda
          },
          tooltip: {
            enabled: false, // Desactivar tooltips
          },
          datalabels: {
            color: '#FFF',
            align: 'end',
            anchor: 'end',
            formatter: (value) => `${value}%`,
            borderColor: 'transparent',
            borderWidth: 0,
            backgroundColor: 'transparent',
            font: {
              size: 12,
            },
          },
        },
        layout: {
          padding: {
            top: 0,
            right: 40,
            left: 40,
          },
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index; // Índice del segmento clicado
            const currentDataset = this.pieChart.data.datasets![0];
  
            // Si el segmento ya está separado, regresa al lugar original
            if (currentDataset.offset[index] === 15) {
              currentDataset.offset[index] = 0;
            } else {
              // Reseteamos cualquier otro segmento previamente separado
              currentDataset.offset = Array(currentDataset.data.length).fill(0);
  
              // Desplazamos el segmento clicado
              currentDataset.offset[index] = 15; // Separación en píxeles
            }
  
            // Actualizamos el gráfico para reflejar el cambio
            this.pieChart.update();
  
            // Opcional: Realizar alguna acción adicional con el segmento clicado
            const label = this.pieChart.data.labels![index];
            const value = this.pieChart.data.datasets![0].data[index];
            console.log(`Hiciste clic en el segmento: ${label} (${value}%)`);
          }
        },
      },
    });
  } 
  
  
  

  updateBarChartData() {
    // Actualiza los datos del gráfico de barras según el año seleccionado
    this.barChart.update();
  }
}
