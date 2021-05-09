import { ForgotPasswordComponent } from './forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  entryComponents: [ForgotPasswordComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ForgotPasswordModule { }
