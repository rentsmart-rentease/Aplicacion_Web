import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosModule) },
  { path: 'publinmueble', loadChildren: () => import('./publ-inmueble/publ-inmueble.module').then(m => m.PublInmuebleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
