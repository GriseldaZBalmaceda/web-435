/*
============================================
; Title:Routing Module
; Author: Griselda Balmaceda
; Description: Sets up the Routing for the application
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes=[
  {path: 'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
