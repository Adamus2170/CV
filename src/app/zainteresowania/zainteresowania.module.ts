import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZainteresowaniaRoutingModule } from './zainteresowania-routing.module';
import { ZainteresowaniaComponent } from './zainteresowania.component';


@NgModule({
  declarations: [
    ZainteresowaniaComponent
  ],
  imports: [
    CommonModule,
    ZainteresowaniaRoutingModule
  ]
})
export class ZainteresowaniaModule { }
