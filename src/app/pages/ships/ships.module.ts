import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShipsComponent} from "./ships.component";
import {StarshipListComponent} from "../../components/ships/starship-list/starship-list.component";
import {StarshipComponent} from "../../components/ships/starship/starship.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ShipsComponent},
]

@NgModule({
  declarations: [
    ShipsComponent,
    StarshipListComponent,
    StarshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ShipsModule { }
