import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZainteresowaniaComponent } from './zainteresowania.component';

const routes: Routes = [{ path: '', component: ZainteresowaniaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZainteresowaniaRoutingModule { }
