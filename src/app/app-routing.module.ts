import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from "./pages/register/register.component";
import {AuthGuard} from "./guards/auth.guard";
import {JedisComponent} from "./pages/jedis/jedis.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ships', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ships/ships.module').then(m => m.ShipsModule),
  },
  {
    path: 'jedis', canActivate: [AuthGuard],
    component: JedisComponent,
  },
  {
    path: '',
    redirectTo: 'ships',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
