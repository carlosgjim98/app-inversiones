import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-inquilinos',
  templateUrl: './detalles-inquilinos.page.html',
  styleUrls: ['./detalles-inquilinos.page.scss'],
})
export class DetallesInquilinosPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }


  ngOnInit() {
  }

}
