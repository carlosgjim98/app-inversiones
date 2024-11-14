import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    
    { tab: 'inicio', name: 'Inicio',  icon:"assets/icons/Home.svg" },
    { tab: 'fondos-inversion', name: 'Inversiones', icon:"assets/icons/Data Trending.svg" },
    { tab: 'categorias', name: 'Categorías', icon:"assets/icons/Grid.svg" },
    { tab: 'profile', name: 'Perfil', icon:"assets/icons/Person.svg" }
  ];
  constructor() {}

}
