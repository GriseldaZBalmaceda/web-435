/*
============================================
; Title: Login Component
; Author: Griselda Balmaceda
; Description: Holds Login view
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
     Please login in here!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
