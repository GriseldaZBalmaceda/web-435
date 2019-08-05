import { Injectable } from '@angular/core';
import {Fruit} from './fruit';
import 'rxjs/add/observable/of';
import {Observable,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FruitService {
fruit:Fruit[]=[
  {id:1,name:"oranges",pricePerPound:2.99,quantity:10},
  {id:2,name:"apples",pricePerPound:1.99,quantity:6},
  {id:3,name:"mangos",pricePerPound:2.20,quantity:7},
  {id:4,name:"kiwis",pricePerPound:1.99,quantity:15},
  {id:5,name:"banana",pricePerPound:.89,quantity:6}
]
  constructor() { }
  getFruits():Observable<Fruit[]>{
    return of(this.fruit)
  }
}
