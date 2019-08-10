import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SwizzyService } from './swizzy.service';
import { FoodAndResturantsComponent } from './food-and-resturants/food-and-resturants.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    FoodAndResturantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [SwizzyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
