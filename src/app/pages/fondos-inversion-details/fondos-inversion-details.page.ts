import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {  registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-fondos-inversion-details',
  templateUrl: './fondos-inversion-details.page.html',
  styleUrls: ['./fondos-inversion-details.page.scss'],
})
export class FondosInversionDetailsPage implements OnInit {
  lineChart: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    // Destruir los gráficos al salir de la página
    if (this.lineChart) {
      Chart.getChart("lineChart")?.destroy()
    }
   
  }
  ngAfterViewInit() {
    const ctx = (document.getElementById('lineChart2') as HTMLCanvasElement)?.getContext('2d');
    
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['', '', '', '', '2022', '', '', '', '', '2023', '', '', '', '', '2024', '', '',],
          datasets: [
            {
              label: 'A&B',
              data: [0, 10, 8, 17, 7, 16, 28, 15, 21, 17, 25, 20, 23, 7, 22, 10, 17],
              borderColor: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
              fill: false,
              tension: 0,
              pointRadius: 0,
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0, // Oculta los puntos
              borderWidth: 2, // Ajusta el grosor de la línea si es necesario
            },
            {
              label: 'Indx A&B 400',
              data: [0, -5, 0, -10, 20, 15, -3, 15, 5, 10, 0, 4, 2, 20, 4, 18, 10],
              borderColor: '#1E90FF',
              backgroundColor: 'rgba(30, 144, 255, 0.2)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'App Inc.',
              data: [0, -15, -10, -18, 10, 5, -10, 23, 15, 20, 10, 15, 11, 26, 15, 25, 15],
              borderColor: '#87CEFA',
              backgroundColor: 'rgba(135, 206, 250, 0.2)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'S.E Ab',
              data: [0, -15, -10, -18, -7, -16, -30, -15, -20, -17, -27, -2, -5, 10, -3, 10, 0],
              borderColor: '#4682B4',
              backgroundColor: 'rgba(70, 130, 180, 0.2)',
              fill: false,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            datalabels: {
              display: false, // Hace que no se muestren los número sobre la línea de la gráfica
            },
            legend: {
              display: false, // Oculta la leyenda si no la necesitas
              position: 'bottom',
            },
            tooltip: {
              enabled: false, // Desactiva los tooltips que aparecen al pasar el ratón
            },
            // Desactiva los datalabels si están activos
            datalabels: {
              display: false,
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: -40,
              max: 40,
              ticks: {
                stepSize: 20,
                callback: function(value) {
                  return value + '%';
                }
              }
            },
            x: {
              display: true,
            }
          },
        }
      });
    }
  }
  
  
}

