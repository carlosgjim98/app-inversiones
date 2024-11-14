import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-inmobiliaria',
  templateUrl: './detalles-inmobiliaria.page.html',
  styleUrls: ['./detalles-inmobiliaria.page.scss'],
})
export class DetallesInmobiliariaPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
  }

}
