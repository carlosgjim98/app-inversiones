import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-empleados',
  templateUrl: './detalles-empleados.page.html',
  styleUrls: ['./detalles-empleados.page.scss'],
})
export class DetallesEmpleadosPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }


  ngOnInit() {
  }

}
