import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'balmaceda-template-forms';
  onSubmit(formData){
    console.log(formData)
  }
}
