import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ListModule { }
