import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onSubmit = () => console.log('object');

  onForgotPassword = async () => {
    const modal = await this.modalCtrl.create({
      component: ForgotPasswordComponent
    });
    modal.present();
  };
}
