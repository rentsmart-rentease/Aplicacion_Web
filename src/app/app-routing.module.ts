import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraFiltroComponent } from './barra-filtro/barra-filtro.component';
import { BuscaVisualizacionComponent } from './busca-visualizacion/busca-visualizacion.component';
import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro/muestra-resultados-de-filtro.component'; 

const routes: Routes = [
  { path: 'barra', component: BarraFiltroComponent },
  { path: 'busca-visualizacion', component: BuscaVisualizacionComponent },
  { path: 'muestra', redirectTo: '/muestra-resultados', pathMatch: 'full' },
  { path: 'muestra-resultados', component: MuestraResultadosDeFiltroComponent } // Definimos la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
