/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description:Importing needed components and
  setting routing paths.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {UserComponent} from '../app/user/user.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'user/:id',component:UserComponent},
  {path:'**', component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
