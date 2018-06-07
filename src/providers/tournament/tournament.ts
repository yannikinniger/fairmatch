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
  userTournaments: AngularFirestoreCollection<Tournament>;

  constructor(private db: AngularFirestore) {
    if (firebase.auth().currentUser !== null) {
      this.tournaments = this.db.collection<Tournament>('tournaments');
      this.userTournaments = this.db.collection(`/users/${firebase.auth().currentUser.uid}/tournaments`);
    } else {
      throw new Error('user not logged in');
    }
  }

  createTournament(tournament: Tournament): Promise<DocumentReference> {
    tournament.id = this.db.createId();
    const tournamentObject = JSON.parse(JSON.stringify(tournament));
    return new Promise<DocumentReference>((resolve, reject) => {
      this.userTournaments.add(tournamentObject)
        .then(documentRef => {
          resolve(documentRef);
        }, err => reject(err))
        .then(_ => this.tournaments.add(tournamentObject))
    });
  }

  getTournaments(): Array<Tournament>{
    const tournaments = [];
    this.userTournaments.ref.get().then(snapshot =>
      snapshot.forEach(doc => {
        tournaments.push(doc.data());
        console.log(doc.data());
      })
    );
    return tournaments;
  }
}
