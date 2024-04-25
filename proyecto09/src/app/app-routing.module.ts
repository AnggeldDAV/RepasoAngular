import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista02Component } from './vista02/vista02.component';
import { Vista03Component } from './vista03/vista03.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'feature-1', component: Vista02Component },
  { path: 'feature-2', component: Vista03Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
