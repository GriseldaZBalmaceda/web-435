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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'balmaceda-hello-di';
}
