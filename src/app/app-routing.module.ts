import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraFiltroComponent } from './barra-filtro/barra-filtro.component';
import { BuscaVisualizacionComponent } from './busca-visualizacion/busca-visualizacion.component';

const routes: Routes = [
  { path: '', component: BarraFiltroComponent },
  { path: 'busca-visualizacion', component: BuscaVisualizacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
