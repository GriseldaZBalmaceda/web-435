/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description: We added an onSubmit function that will log our form data
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'balmaceda-form-validation';

  onSubmit(formData){
    console.log(formData)
  }

}
