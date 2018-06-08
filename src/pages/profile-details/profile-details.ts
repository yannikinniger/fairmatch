import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import * as firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

  email: string;

  constructor(public navCtrl: NavController) {
    console.log(firebase.auth().currentUser.email);
    this.email = firebase.auth().currentUser.email
  }

  signOut() {
    firebase.auth().signOut()
      .then(_ => this.navCtrl.push('SignUpPage')).catch();
  }

}
