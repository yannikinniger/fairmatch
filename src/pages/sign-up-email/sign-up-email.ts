import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up-email',
  templateUrl: 'sign-up-email.html',
})
export class SignUpEmailPage{

  password: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginWithEmail() {
    console.log(this.password);
    this.navCtrl.push('TournamentOverviewPage');
  }

}
