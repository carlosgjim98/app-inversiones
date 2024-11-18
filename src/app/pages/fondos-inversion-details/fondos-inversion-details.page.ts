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
          labels: ['2022', '2023', '2024'],
          datasets: [
            {
              label: 'A&B',
              data: [5, 10, 15, -5, 0, 10, -10, 5, -5, 20, 10, 0],
              borderColor: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'Indx A&B 400',
              data: [-10, -5, 10, 5, -5, 0, 10, 15, 5, 0, -10, 10],
              borderColor: '#1E90FF',
              backgroundColor: 'rgba(30, 144, 255, 0.2)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'App Inc.',
              data: [-5, 15, 0, 10, -10, 5, -5, 0, 15, -10, 5, -5],
              borderColor: '#87CEFA',
              backgroundColor: 'rgba(135, 206, 250, 0.2)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'S.E Ab',
              data: [10, -10, 5, 15, 0, -5, 10, 0, -15, 5, -5, 15],
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
            legend: {
              display: false,
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: -20,
              max: 20,
              ticks: {
                stepSize: 10,
                callback: function(value) {
                  return value + '%';
                }
              }
            },
            x: {
              display: true
            }
          }
        }
      });
    }
  }
}

