import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUp: boolean;

  constructor(public navCtrl: NavController) {}

  handleProceed() {
    this.navCtrl.push('SignUpEmailPage', {signUp: this.signUp});
  }

  changeView() {
    this.signUp = !this.signUp;
  }

}
