import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vista02Component } from './vista02/vista02.component';
import { Vista03Component } from './vista03/vista03.component';

@NgModule({
  declarations: [
    AppComponent,
    Vista02Component,
    Vista03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
