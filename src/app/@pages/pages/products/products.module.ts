import { ListProductModule } from './../../../@sharing/list-product/list-product.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListModule } from '@sharing/list/list.module';
import { HeaderModule } from '@widgets/header/header.module';
import { DirectivesModule } from '@core/directives/directives.module';

import { ProductsPage } from './products.page';
import { ProductsPageRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ListModule,
    HeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule,
    ListProductModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
