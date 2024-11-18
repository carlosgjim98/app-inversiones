import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-captura',
  templateUrl: './modal-captura.component.html',
  styleUrls: ['./modal-captura.component.scss'],
})
export class ModalCapturaComponent  implements OnInit {

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
  
  ngOnInit() {}

}
