/*
============================================
; Title: App Module
; Author: Griselda Balmaceda
; Description: App modules containes all modules
that are needed for the application.This assignment
had us import the Shipping module
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ShippingModule} from './shipping/shipping.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  //imported shipping module
  imports: [
    BrowserModule,
    ShippingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
