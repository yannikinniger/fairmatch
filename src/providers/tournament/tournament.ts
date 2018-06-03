import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from 'angularfire2/firestore';
import {Tournament} from "../../model/tournament";

@Injectable()
export class TournamentProvider {

  tournaments: AngularFirestoreCollection<Tournament>;

  constructor(private db: AngularFirestore) {
    this.tournaments = this.db.collection<Tournament>('tournaments')
  }

  createTournament(tournament: Tournament): Promise<DocumentReference> {
    tournament.id = this.db.createId();
    const tournamentObject = JSON.parse(JSON.stringify(tournament));
    return new Promise<DocumentReference>((resolve, reject) => {
      this.tournaments.add(tournamentObject)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    });
  }

}
