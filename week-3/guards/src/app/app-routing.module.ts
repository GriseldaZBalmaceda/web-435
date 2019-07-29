/*
============================================
; Title: Aop Routing Module
; Author: Griselda Balmaceda
; Description: Setting Routing for application
;===========================================
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/login/login.component';
import {ProductDetailComponent} from '../app/product-detail/product-detail.component'
import { UnsavedChangesGuard } from './unsaved-changed.guard'
import { LoginGuard } from './login.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product',
          component: ProductDetailComponent,
          canActivate: [LoginGuard],
          canDeactivate: [UnsavedChangesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
