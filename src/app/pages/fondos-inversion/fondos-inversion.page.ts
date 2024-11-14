import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-fondos-inversion',
  templateUrl: './fondos-inversion.page.html',
  styleUrls: ['./fondos-inversion.page.scss'],
})
export class FondosInversionPage implements OnInit, AfterViewInit, OnDestroy {
  lineChart: Chart | null = null;
  selectedOption: string = '1A';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
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
      labels: ['', '', '', 'Enero \'24', '', '', '', 'Mayo \'24',  '', '', '', 'Septiembre \'24',  ''],
      datasets: [
        {
          label: 'Línea Dorada',
          data: [0, 12, 25, 28, 16, 20, 13, 17, 19, 23, 20, 25, 18], // Ejemplo de datos para seguir la estructura
          borderColor: '#B8A44F', // Color dorado
          fill: false,
          tension: 0,
          pointRadius: -30,
          borderWidth: 2,
        },
        {
          label: 'Línea Morada',
          data: [0, -18, -12, -15, -0, -17, -5, 0, -5, -12, -12, -1, -20,],
          borderColor: '#874FB8', // Color púrpura
          fill: false,
          tension: 0,
          pointRadius: -30,
          borderWidth: 2,
        },
        {
          label: 'Línea Azul',
          data: [0, 5, 8, 12, 6, 9, 5, 10, 8, 7, 11, 9, 13],
          borderColor: '#4F4FB8', // Color azul
          fill: false,
          tension: 0,
          pointRadius: -30,
          borderWidth: 2,
        },
        {
          label: 'Línea de Tendencia',
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20], // Línea de tendencia gradual
          borderColor: '#DC5C7E', // Color rojo
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
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: -40,
            max: 40,  // Estableces el máximo a 40
            ticks: {
              stepSize: 20,
              color: '#D9D9D9',
              callback: function(value) {
                // Evitar mostrar el símbolo '%' cuando el valor es 40
                if (value === 40 || value === -40) {
                  return "";  // Devuelve solo el valor sin el símbolo '%'
                }
                return String(value) + '%';  // Agrega el símbolo '%' a otros valores
              },
            },
            grid: {
              color: '#444', // Color de las líneas de la cuadrícula
              tickLength: 20,
              lineWidth: 1, 
              
            },
          },
          
          x: {
            ticks: {
                color: '#D9D9D9',
                align: 'center',
                
                 // Añade espacio alrededor del texto para separarlo un poco de la línea
                
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
