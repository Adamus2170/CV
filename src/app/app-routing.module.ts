import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'edukacja', loadChildren: () => import('./edukacja/edukacja.module').then(m => m.EdukacjaModule) }, 
{ path: 'zainteresowania', loadChildren: () => import('./zainteresowania/zainteresowania.module').then(m => m.ZainteresowaniaModule) }, 
{ path: 'doswiadczenie', loadChildren: () => import('./doswiadczenie/doswiadczenie.module').then(m => m.DoswiadczenieModule) }, 
{ path: 'contactForm', loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
