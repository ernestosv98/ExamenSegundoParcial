import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  @Input() id;
  @Input() data;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.edit();
  }

  temp = {
    name : "",
    id : "",
    description : "",
    price : "",
    category : "",
    availability : ""
  };

  edit(){
    console.log(this.data)
    this.temp = this.data
  }

  update(nom: any, id: any,desc: any, prec: any, cat: any, av : any){
    this.temp.name = nom.value
    this.temp.description = desc.value
    this.temp.price = prec.value
    this.temp.category = cat.value
    this.temp.availability = av.value

    this.productService.updateProduct(this.id, this.temp)
  }

}
