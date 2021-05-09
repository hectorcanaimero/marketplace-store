import { IonicModule } from '@ionic/angular';
import { ListProductComponent } from './list-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ListProductComponent],
  exports: [ListProductComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ListProductModule { }
