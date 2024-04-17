import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdukacjaRoutingModule } from './edukacja-routing.module';
import { EdukacjaComponent } from './edukacja.component';


@NgModule({
  declarations: [
    EdukacjaComponent
  ],
  imports: [
    CommonModule,
    EdukacjaRoutingModule
  ]
})
export class EdukacjaModule { }
