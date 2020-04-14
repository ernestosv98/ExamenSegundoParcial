import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage {
  @Input() item;
  
  constructor(private alertController: AlertController) { }
  async presentAlert(Header, SubHeader, Message) {
    const alert = await this.alertController.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
