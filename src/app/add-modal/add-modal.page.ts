import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Producto } from 'src/app/home/Producto'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage{
  
  constructor(private productService: ProductService,
              private alertController: AlertController) { }
  async presentAlert(Header, SubHeader, Message) {
    const alert = await this.alertController.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  add(nom: any, id: any,desc: any, prec: any, cat: any){
    const temp  = {
      id: id.value,
      name: nom.value,
      description: desc.value,
      price: prec.value,
      category: cat.value,
      availability: "si"
    };
    
    
    this.productService.addProducto(temp).then(() => {
      console.log('Product Added');
      this.presentAlert("Success!", "", "Your product has been added succesfully");
    }).catch((error) => {
      console.log(error);
    });
  }


  

}
