import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { FoodAndResturantsComponent } from './food-and-resturants/food-and-resturants.component';



const r:Routes=[
  {path:'', redirectTo:'/initial-page',pathMatch:'full'},
  {path:'initial-page',component:InitialPageComponent,pathMatch:'full'},
  {path:'food-and-restaurants/:id',component:FoodAndResturantsComponent, }

]
@NgModule({
  imports: [
    RouterModule.forRoot(r),
  ],exports:[RouterModule] ,
  declarations: []
})
export class AppRoutingModule { }
