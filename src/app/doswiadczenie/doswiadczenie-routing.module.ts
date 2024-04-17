import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoswiadczenieComponent } from './doswiadczenie.component';

const routes: Routes = [{ path: '', component: DoswiadczenieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoswiadczenieRoutingModule { }
