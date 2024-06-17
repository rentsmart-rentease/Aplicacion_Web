// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizacionResenasComponent } from './visualizacion-resenas/visualizacion-resenas.component';

const routes: Routes = [
  { path: 'resenas', component: VisualizacionResenasComponent },
  { path: '', redirectTo: '/resenas', pathMatch: 'full' },
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
