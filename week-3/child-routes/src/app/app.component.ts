
/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description:Setting Title and userId in App component
and then exporting it to be used globally.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'child-routes';
  productId=1234;
}
