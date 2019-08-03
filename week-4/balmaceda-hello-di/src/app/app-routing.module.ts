import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruits/fruit.component';


const routes: Routes = [
  {path:'',component:FruitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
