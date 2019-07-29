/*
============================================
; Title: Login Guard
; Author: Griselda Balmaceda
; Description: login guard  allows the user
to see the product detail
;===========================================
*/


import { Injectable } from "@angular/core";
import { CanActivate, Router} from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate{
  constructor(private router:Router){}
  canActivate(){
    let loggedIn = Math.random()< 0.5;
    if(!loggedIn){
      alert("You're not logged in and will be redirected to the Login Page");
      this.router.navigate(["/login"])
    }
    return loggedIn
  }
}
