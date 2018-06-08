import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpEmailPageModule} from "../sign-up-email/sign-up-email.module";
import {SignUpEmailPage} from "../sign-up-email/sign-up-email";

/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {
  provider: SignUpEmailPage;
  email: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email=this.provider.email;
  }

  ionViewDidLoad() {
    console.log(this.email);
  }

}
