import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginProvider {

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyCBcAtZ7TKZ43f01qE2CRpzxNuTSl9dZLs",
      authDomain: "fairmatch-781e7.firebaseapp.com",
      databaseURL: "https://fairmatch-781e7.firebaseio.com",
      projectId: "fairmatch-781e7",
      storageBucket: "fairmatch-781e7.appspot.com",
      messagingSenderId: "958988116522",
    })
  }

  doRegister(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogin(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

}
