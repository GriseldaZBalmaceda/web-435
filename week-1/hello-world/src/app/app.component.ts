/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //saving hello world inside message variable
  message = 'Hello World';
}
