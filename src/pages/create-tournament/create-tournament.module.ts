import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTournamentPage } from './create-tournament';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CreateTournamentPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTournamentPage),
    ComponentsModule,
  ],
})
export class CreateTournamentPageModule {}
