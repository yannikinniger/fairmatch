import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Tournament} from "../../model/tournament";

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
