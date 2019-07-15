/*
============================================
; Title: Shipping Components
; Author: Griselda Balmaceda
; Description:Shows the structure of the Shipping Components
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
   This is the shipping component:)
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
