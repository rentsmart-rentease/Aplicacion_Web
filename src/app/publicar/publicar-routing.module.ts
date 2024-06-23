import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicarComponent } from './publicar.component';
import { InformacionComponent } from './informacion/informacion.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  { path: '', component: PublicarComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'end', component: EndComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarRoutingModule { }
