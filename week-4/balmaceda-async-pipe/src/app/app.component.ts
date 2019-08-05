import { Component} from '@angular/core';
import { Observable} from 'rxjs';
import { FruitService } from './fruit.service';
import {Fruit} from './fruit'
@Component({
  selector: 'app-root',
  template: `
  <br /> <br />
  <div class="container">
  <h1>Hello</h1>
  <div class="row">
  <div class="col">
  <ul>
  <li *ngFor="let fruit of fruits | async">
  {{fruit.name}}
  </li>
  </ul>
  </div>
  </div>
  </div>

  `,
  styleUrls: ['./app.component.scss'],
  providers:[FruitService]
})

export class AppComponent {
  fruits : Observable<Fruit[]>;
  title = 'balmaceda-async-pipe';
  constructor(private fruitService: FruitService){}

  ngOnInIt(){
    this.fruits = this.fruitService.getFruits();
  }
}
