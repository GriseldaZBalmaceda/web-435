/*
============================================
; Title: Home
; Author: Griselda Balmaceda
; Description: About component holds the Home section
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class="row">
  <h2>Welcome to the Home Page</h2>
  </div>
  </div>
  `,
  styles: [`
  .container{
    margin-top:20px;
    }
    h2{
      color:purple;
      }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
