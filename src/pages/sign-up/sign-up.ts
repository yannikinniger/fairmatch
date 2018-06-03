import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUp: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  singUpWithEmail() {
    this.navCtrl.push('SignUpEmailPage');
  }

  signInWithEmail() {
    this.navCtrl.push('SignUpEmailPage');
  }

  changeView() {
    this.signUp = !this.signUp;
  }

}
