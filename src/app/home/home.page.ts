import { Component, OnInit, Input} from '@angular/core';
import { Producto } from './Producto'
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from '../edit-modal/edit-modal.page';
import { ProductService } from '../services/product.service';
import { AddModalPage } from '../add-modal/add-modal.page';
import { ProductModalPage } from '../product-modal/product-modal.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alertController: AlertController,
              private modalctrl: ModalController,
              private productService: ProductService) {}
 


  productos = [];

  ngOnInit(): void {
    this.getProductos();
  }


  async Modal(index) {
    console.log(index);
    const modal = await this.modalctrl.create({
      component: EditModalPage,
      componentProps: {
        id: this.productos[index].originalID,
        data : this.productos[index]
      }
      
      
    });
    
    await modal.present()
  }
  
  async addModal() {
    const modal = await this.modalctrl.create({
      component: AddModalPage
      
      
    });
    await modal.present()
  }

  async mostrarModal(data) {
    const modal = await this.modalctrl.create({
      component: ProductModalPage,
      componentProps: {
        item: data
      }
      
      
    });
    await modal.present()
  }

  getProductos() {
    this.productService.getProducts().subscribe((products) => {
      this.productService.productos = products;
      this.productos = this.productService.productos;
    });
  }

  dl(index){
    this.productService.removeProducto(this.productos[index].originalID)
  }

  search(id) {
    this.productos.forEach(item => {
      if(item.id === id.value){
        this.mostrarModal(item)
      }
      else if(item.name === id.value){
        this.mostrarModal(item)
      }
    });
  }


}
