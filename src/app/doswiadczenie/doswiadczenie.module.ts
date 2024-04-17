import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoswiadczenieRoutingModule } from './doswiadczenie-routing.module';
import { DoswiadczenieComponent } from './doswiadczenie.component';


@NgModule({
  declarations: [
    DoswiadczenieComponent
  ],
  imports: [
    CommonModule,
    DoswiadczenieRoutingModule
  ]
})
export class DoswiadczenieModule { }
