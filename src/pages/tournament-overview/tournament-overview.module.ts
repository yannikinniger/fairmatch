import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentOverviewPage } from './tournament-overview';

@NgModule({
  declarations: [
    TournamentOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentOverviewPage),
  ],
})
export class TournamentOverviewPageModule {}
