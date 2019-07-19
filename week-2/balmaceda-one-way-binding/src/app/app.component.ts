/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description: App components is the root of the applications
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* Used template instead of URL */
  template:`
  <h1>{{name}}</h1>
  <button (click)="changeName()">Change Name</button>
  `,
    /* Used inline style  */
  styles: [
  `h1{
    color:red;
  }`
  ]
})
export class AppComponent {
  title = 'app';
  //set name
  name:string="Griselda Balmaceda";
//created changeName event that will switch the name
  changeName(){
  this.name="Balmaceda Griselda "
  }
}
