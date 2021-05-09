import { ForgotPasswordModule } from './../forgot-password/forgot-password.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordModule,
    SignInPageRoutingModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
