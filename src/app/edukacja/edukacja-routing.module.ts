import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdukacjaComponent } from './edukacja.component';

const routes: Routes = [{ path: '', component: EdukacjaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdukacjaRoutingModule { }
