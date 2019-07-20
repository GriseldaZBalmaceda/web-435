/*
============================================
; Title: Contact
; Author: Griselda Balmaceda
; Description: Contact component holds the Contact section
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
  <div class="row">
  <h2>Welcome to the Contact Page</h2>
  </div>
  </div>
  `,
  styles: [`
  .container{
    margin-top:20px;
    }
  h2{
    color:Green;
    }

  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
