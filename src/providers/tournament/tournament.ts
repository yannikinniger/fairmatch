import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from 'angularfire2/firestore';
import {Tournament} from "../../model/tournament";
import * as firebase from "firebase";

@Injectable()
export class TournamentProvider {

  tournaments: AngularFirestoreCollection<Tournament>;
  userTournaments: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    if (firebase.auth().currentUser !== null) {
      this.tournaments = this.db.collection<Tournament>('tournaments');
      this.userTournaments = this.db.collection('users').doc(firebase.auth().currentUser.uid);
    } else {
      throw new Error('user not logged in');
    }
  }

  createTournament(tournament: Tournament): Promise<DocumentReference> {
    tournament.id = this.db.createId();
    const tournamentObject = JSON.parse(JSON.stringify(tournament));
    return new Promise<DocumentReference>((resolve, reject) => {
      this.tournaments.add(tournamentObject)
        .then(documentRef => {
          this.userTournaments.collection<object>('tournaments').add({path: documentRef.path})
            .catch(err => console.log(err));
          resolve(documentRef);
        }, err => reject(err))
    });
  }

  getTournaments() {
    const uid = firebase.auth().currentUser.uid;
  }

}
