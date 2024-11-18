import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-proyectos-a-futuro',
  templateUrl: './detalles-proyectos-a-futuro.page.html',
  styleUrls: ['./detalles-proyectos-a-futuro.page.scss'],
})
export class DetallesProyectosAFuturoPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
  }

}
