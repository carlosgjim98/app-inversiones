import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-fondos-inversion',
  templateUrl: './fondos-inversion.page.html',
  styleUrls: ['./fondos-inversion.page.scss'],
})
export class FondosInversionPage implements OnInit, OnDestroy {
  lineChart: Chart | null = null;
  selectedOption: string = '1A';

  constructor() {}

  ngOnInit() {
 
  }

  ionViewWillEnter() {
    this.createLineChart();
  }

 
  ngOnDestroy() {
    if (this.lineChart) {
      this.lineChart.destroy();
    }
  }

  onOptionChange() {
    this.updateLineChartData();
  }

  private updateLineChartData() {
    if (this.lineChart) {
      this.lineChart.update();
    }
  }

  private createLineChart() {
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error("No se encontró el elemento canvas.");
      return;
    }
  
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Error al obtener el contexto del canvas.");
      return;
    }
  
    // Ajusta los datos para distribuirse mejor en el gráfico
    const data = {
      labels: [
        'Enero \'24', 'Febrero \'24', 'Marzo \'24', 'Abril \'24', 
        'Mayo \'24', 'Junio \'24', 'Julio \'24', 'Agosto \'24', 
        'Septiembre \'24', 'Octubre \'24', 'Noviembre \'24', 'Diciembre \'24', ''
    ],
      datasets: [
        {
          label: 'Línea Dorada',
          data: [0, 12, 25, 28, 16, 20, 13, 17, 19, 23, 20, 25, 18],
          borderColor: '#B8A44F', 
          fill: false,
          tension: 0,
          pointRadius: 0, // Oculta los puntos
          borderWidth: 2,
        },
        {
          label: 'Línea Morada',
          data: [0, -18, -12, -15, -0, -17, -5, 0, -5, -12, -12, -1, -20],
          borderColor: '#874FB8', 
          fill: false,
          tension: 0,
          pointRadius: 0, 
          borderWidth: 2,
        },
        {
          label: 'Línea Azul',
          data: [0, 5, 8, 12, 6, 9, 5, 10, 8, 7, 11, 9, 13],
          borderColor: '#4F4FB8', 
          fill: false,
          tension: 0,
          pointRadius: 0, 
          borderWidth: 2,
        },
        {
          label: 'Línea de Tendencia',
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20],
          borderColor: '#DC5C7E', 
          fill: false,
          tension: 0,
          pointRadius: 0, 
          borderWidth: 2,
        },
      ],
    };
  
    // Crear gráfico
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false, 
          },
          tooltip: {
            enabled: false, 
          },
          datalabels: {
            display: false, 
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: -40,
            max: 40,
            ticks: {
              stepSize: 20,
              color: '#D9D9D9',
              callback: function(value) {
                if (value === 40 || value === -40) {
                  return ""; // Evita mostrar los números cuando sea 40 o -40
                }
                return String(value) + '%'; // Añade '%' a los demás valores
              },
            },
            grid: {
              color: '#444',
              tickLength: 20,
              lineWidth: 1, 
            },
          },
          x: {
            ticks: {
              maxRotation: 0, // Impide rotar el texto
              minRotation: 0, // Asegura que los valores se muestren en horizontal
              color: '#D9D9D9',
              align: 'center',
              font: {
                size: 10, // Reduce el tamaño de la fuente
            },
              callback: function(value, index, values) {
                const labels = [ '', 'Febrero \'24', 'Marzo \'24', 'enero \'24', 
        '', 'Junio \'24', 'Mayo \'24', 'Agosto \'24', 
        'Septiembre \'24', 'Sep \'24', 'Noviembre \'24', 'Diciembre \'24', ''];
                
                return labels[index] || ''; 
              },
            },
            grid: {
              color: 'transparent',
            },
          },
        },
      },
    });
  }
}