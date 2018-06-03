import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFirestoreDocument} from "angularfire2/firestore/document/document";
import {Tournament} from "../../model/tournament";


/*
  Generated class for the TournamentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TournamentProvider {

  tournaments: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.tournaments = this.db.collection<Tournament>('/tournaments')
  }

  createTorunament(tournament: Tournament): Promise<any> {
    return this.tournaments.doc<Tournament>(`/${this.db.createId()}`)
      .set(tournament)
  }

}
