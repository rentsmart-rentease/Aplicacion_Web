import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroResenaComponent } from './registro-resena/registro-resena.component';

const routes: Routes = [
  { path: 'registro-resena', component: RegistroResenaComponent },
  { path: '', redirectTo: '/registro-resena', pathMatch: 'full' }, // Redireccionar a la ruta de la reseña por defecto
  { path: '**', redirectTo: '/registro-resena', pathMatch: 'full' } // Manejo de rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
