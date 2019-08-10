import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SwizzyService } from './swizzy.service';


@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SwizzyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
