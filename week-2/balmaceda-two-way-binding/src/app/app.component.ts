import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <br /><br/><br />
  <div class="container-fluid two-way-form">
  <h2 class="text-center">Two-Way Bindng Example</h2><br />
<div class="styleForm form-group">
<input class="form-control" type="text"
placeholder="Enter your name..."
[(ngModel)]="name">
<button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
</div>
<div class="styleForm form-group">
<p class="alert-success"> Welcome to two-way binding, {{name}}!!</p>
<div>
</div>
  `,
  styles: [`
  .styleForm {
    width:50%;
    margin:auto;
  }
  .alert-success {
    background-color:red;
    color:white;
  }

  `

  ]
})
export class AppComponent {
  title = 'balmaceda-two-way-binding';
}
