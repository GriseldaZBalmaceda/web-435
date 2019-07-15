
/*
============================================
; Title: Shipping Modules
; Author: Griselda Balmaceda
; Description: Shows what is needed for the shipping
; module and exports the component
;===========================================
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  imports: [CommonModule],
  //declared shipping component
  declarations:[ShippingComponent],
  //exporting shipping component
  exports:[ShippingComponent]
})
export class ShippingModule { }
