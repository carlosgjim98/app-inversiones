import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ModalController } from '@ionic/angular';
import { ModalCapturaComponent } from 'src/app/components/modal-captura/modal-captura.component';

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
  
    // Ajustar el tamaño del canvas
    const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
   
  
    // Destruir el gráfico de pastel existente si ya existe
    if (this.pieChart) {
      Chart.getChart("pieChart")?.destroy();  // Destruir el gráfico de pastel
    }
  
    // Crear el gráfico de pastel
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['A&B', 'Indx A&B 400', 'App Inc.', 'S.E Ab'],
        datasets: [
          {
            data: [ 5,15,30,50],
            backgroundColor: ['#AFD7F8','#0A4E88', '#5CA1DC' , '#B8A44F'], 
            borderWidth: 0,
          },
        ],
      },
      options: {
        aspectRatio: 1, 
        rotation: -90,
        circumference: 180,
        responsive: true,
        layout: {
          padding: {
            top: 0,
            right:40,
            left:60,
             // Espacio adicional en la parte superior
          },
        },
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              color: '#FFF',
              usePointStyle: true,
              padding: 10,
              boxWidth: 20,
            },
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            color: '#FFF',
            align: 'end',
            anchor: 'end',
            formatter: (value, context) => {
              const label = context.chart.data.labels[context.dataIndex];
              return ` ${value}%`;
            },
            borderColor: '#FFF',
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: '#333',
            font: {
              size: 12,
            },
            padding: {},
          },
        },
      },
    });
  }
  

  updateBarChartData() {
    // Actualiza los datos del gráfico de barras según el año seleccionado
    this.barChart.update();
  }
}
