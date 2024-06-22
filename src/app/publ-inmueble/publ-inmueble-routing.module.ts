import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublInmuebleComponent } from './publ-inmueble.component';

const routes: Routes = [
  { path: '', component: PublInmuebleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublInmuebleRoutingModule { }
