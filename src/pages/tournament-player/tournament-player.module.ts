import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentPlayerPage } from './tournament-player';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    TournamentPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentPlayerPage),
    ComponentsModule
  ],
})
export class TournamentPlayerPageModule {}
