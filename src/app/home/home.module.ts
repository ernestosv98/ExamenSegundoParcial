import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AddModalPageModule } from '../add-modal/add-modal.module';
import { EditModalPage } from '../edit-modal/edit-modal.page';
import { AddModalPage } from '../add-modal/add-modal.page';
import { EditModalPageModule } from '../edit-modal/edit-modal.module';
import { ProductModalPageModule } from '../product-modal/product-modal.module';
import { ProductModalPage } from '../product-modal/product-modal.page';



@NgModule({
  entryComponents: [
    EditModalPage,
    AddModalPage,
    ProductModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
    ]),
    EditModalPageModule,
    AddModalPageModule,
    ProductModalPageModule


  ],
  declarations: [HomePage]
})
export class HomePageModule {}
