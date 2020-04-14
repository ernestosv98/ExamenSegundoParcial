import { Injectable } from '@angular/core';
import { Producto } from 'src/app/home/Producto'
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore) { }
  
  
  public productos = []

  addProducto(prod: any)  {
    var temp  = {
      id: prod.id,
      name: prod.name,
      description: prod.description,
      price: prod.price,
      category: prod.category,
      availability: prod.availability,
      originalID: prod.originalID
    };

    
    return this.afs.collection('productos').add(prod);
  }

  removeProducto(id) {
    return this.afs.collection('productos').doc(id).delete();
  }
  

  getProducts() {
    return this.afs.collection('productos').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const products = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id
        var temp = new Producto(
          products.id,
          products.name,
          products.description,
          products.price,
          products.category,
          products.availability,
          id
        )
        return temp;
        
      }))
    );
  }



  updateProduct(id, data) {
    var temp  = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      availability: data.availability,
      originalID: data.originalID
    };

    console.log(id)
    console.log(temp)
    return this.afs.collection('productos').doc(id).update(temp);
  }




  

}
