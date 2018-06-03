import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentPlayerPage } from './tournament-player';

@NgModule({
  declarations: [
    TournamentPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentPlayerPage),
  ],
})
export class TournamentPlayerPageModule {}
