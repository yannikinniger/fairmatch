import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";

@IonicPage()
@Component({
  selector: 'page-sign-up-email',
  templateUrl: 'sign-up-email.html',
})
export class SignUpEmailPage {

  @ViewChild('passwordReset') passwordResetOverlay: ElementRef;

  password: string;
    email: string;
  doSignUp: boolean;
  buttonText: string;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
  ) {
    this.doSignUp = navParams.get('signUp');
    this.buttonText = this.doSignUp ? "Account erstellen" : "Login";
  }

  handleSubmit() {
    if (this.doSignUp) {
      this.signUp()
    } else {
      this.signIn();
    }
  }

  signUp() {
    const errorOutput = document.getElementById('message');
    this.loginProvider.doRegister(this.email, this.password)
      .then(_ => {
        errorOutput.innerText = "";
        this.navCtrl.push('TournamentOverviewPage');
      })
      .catch(err => {
        document.getElementById('message').innerText = err.message;
      });
  }

  signIn() {
    const errorOutput = document.getElementById('message');
    this.loginProvider.doLogin(this.email, this.password)
      .then(_ => {
        errorOutput.innerText = "";
        this.navCtrl.push('TournamentOverviewPage');
      })
      .catch(err => {
        document.getElementById('message').innerText = err.message;
      });
  }

  showPasswordReset() {
    this.passwordResetOverlay.nativeElement.display = 'block';
    console.log(this.passwordResetOverlay.nativeElement.style);
  }

}
