import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-turistico',
  templateUrl: './detalles-turistico.page.html',
  styleUrls: ['./detalles-turistico.page.scss'],
})
export class DetallesTuristicoPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
  }

 

}
