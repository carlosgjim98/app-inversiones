import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(ChartDataLabels);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {
  selectedYear: string = '2024';
  barChart: any;
  pieChart: any; // Agregar la propiedad pieChart

  ngOnInit() {
    this.createBarChart();
    this.createPieChart(); // Crear el gráfico de pastel al iniciar
    
  }

  ngOnDestroy() {
    // Destruir los gráficos al salir de la página
    if (this.barChart) {
      this.barChart.destroy();
    }
    if (this.pieChart) {
      this.pieChart.destroy(); // Destruir el gráfico de pastel
    }
  }

  onYearChange() {
    this.updateBarChartData();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    // Destruir el gráfico existente si ya existe
    if (this.barChart) {
      this.barChart.destroy();
    }

    // Crear un degradado
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.height);
    gradient.addColorStop(0, '#D1B63B'); // Color en la parte superior
    gradient.addColorStop(0.5, '#83732F'); // Color en el medio
    gradient.addColorStop(1, '#4A4222'); // Color en la parte inferior

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: 'Crecimiento',
            data: [25, 30, 27, 32, 29, 33, 28, 35, 30, 38, 37, 80], // Datos de ejemplo
            backgroundColor: gradient, // Aplicar el degradado
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
              color: '#444', // Color de las líneas de la cuadrícula
            },
          },
          x: {
            ticks: {
              color: '#D9D9D9',
            },
            grid: {
              color: 'transparent', // Oculta las líneas de la cuadrícula en el eje X
            },
          },
        },
      },
    });
  }



 createPieChart() {
  const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

  if (this.pieChart) {
    this.pieChart.destroy();
  }

  this.pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['A&B', 'Indx A&B 400', 'App Inc.', 'S.E Ab'],
      datasets: [
        {
          data: [50, 30, 15, 5],
          backgroundColor: ['#B8A44F', '#5CA1DC', '#0A4E88', '#AFD7F8'],
          borderWidth: 0,
        },
      ],
      
    },
    options: {
      aspectRatio: 1.8,
      responsive: true,
      layout: {
    padding: {
      top: 35, // Espacio adicional en la parte superior
    }},
      plugins: {
        legend: {
          display: true,
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
          padding: {
            
          
            bottom: 2,
            left: 5,
            right: 5,
          },
        },
      },
      // Función de dibujo personalizada para las líneas
      animation: {
        onComplete: () => {
          const { ctx, chartArea, chart } = this.pieChart;
          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;

          chart.data.datasets[0].data.forEach((_, index) => {
            const meta = chart.getDatasetMeta(0).data[index];
            const pos = meta.tooltipPosition();

            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo((pos.x + centerX) / 2, (pos.y + centerY) / 2);
            ctx.lineTo(pos.x, pos.y - 20);
            ctx.strokeStyle = '#FFF';
            ctx.stroke();
          });
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
