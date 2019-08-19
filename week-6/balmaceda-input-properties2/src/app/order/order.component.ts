import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <p>
      order works!
    </p>
  `,
  styles: [`
  h4{
    text-align:center;
  }
  `]
})
export class OrderComponent implements OnInit {
  @Input() quantity: number;
  @Input() stockSymbol: string;
  constructor() { }

  ngOnInit() {
  }

}
