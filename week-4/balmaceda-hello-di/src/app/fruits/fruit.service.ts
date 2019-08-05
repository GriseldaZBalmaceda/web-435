/*
============================================
; Title: Fruit Service
; Author: Griselda Balmaceda
; Description: Creating a getFruit function that will be exported
;===========================================
*/

import { Injectable } from '@angular/core';
import {Fruit} from './fruit';
@Injectable({
  providedIn: 'root'
})
export class FruitService {
getFruit():Fruit {
  return new Fruit(0,"Apples", "Red")
}
  constructor() { }
}
