/*
============================================
; Title: Fruit Component
; Author: Griselda Balmaceda
; Description: Holds fruit template and main functions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {FruitService} from './fruit.service'
import {Fruit} from './fruit';
@Component({
  selector: 'app-user',
  template: `
 <div class="container">
 <div class="row">
 <h2 class="mx-auto mt-3">Fruit Detail</h2>
 <table class="table table-hover table-striped">
 <thead class="tbl-header">
 <tr>
 <th>Id</th>
 <th>Fruit Name</th>
 <th>Fruit Color</th>
 </tr>
 <tbody>
 <tr>
 <td>{{fruit.id}}</td>
 <td>{{fruit.name}}</td>
 <td>{{fruit.color}}</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
  `,
  styles: [
    `
    .tbl-header{
      background-color:steelblue;
      color:white
    }
    `
  ],
  providers:[FruitService]
})
export class FruitComponent implements OnInit {
fruit:Fruit
  constructor(fruitService:FruitService) { 
    this.fruit=fruitService.getFruit();
  }

  ngOnInit() {
  }

}
