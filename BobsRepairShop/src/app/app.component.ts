import { Component } from '@angular/core';
import {MatDialog} from '@angular/material'
import { InvoiceComponent } from './invoice/invoice.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BobsRepairShop';

  constructor(private dialog:MatDialog){

}

getInvoice(){
  this.dialog.open(InvoiceComponent,{
    width:"100%!important"
  })

};
}


