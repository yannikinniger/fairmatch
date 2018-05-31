import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";

@IonicPage()
@Component({
  selector: 'page-sign-up-email',
  templateUrl: 'sign-up-email.html',
})
export class SignUpEmailPage {

  password: string;
  email: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider
  ) {
  }

  signUp() {
    this.loginProvider.doRegister(this.email, this.password)
      .then(res => this.navCtrl.push('TournamentOverviewPage'))
      .catch(err => {
        document.getElementById('message').innerText = err.message;
        console.log(err)
      });
  }

}
