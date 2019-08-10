import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SwizzyService } from './swizzy.service';
import { FoodAndResturantsComponent } from './food-and-resturants/food-and-resturants.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,

    FoodAndResturantsComponent,

    LoginComponent,

    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [SwizzyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
