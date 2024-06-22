// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroResenaComponent } from './registro-resena/registro-resena.component';
import { VisualizacionResenasComponent } from './visualizacion-resenas/visualizacion-resenas.component';
import { BarraFiltroComponent } from './barra-filtro/barra-filtro.component';
import { BuscaVisualizacionComponent } from './busca-visualizacion/busca-visualizacion.component';
import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro/muestra-resultados-de-filtro.component'; 


const routes: Routes = [
  { path: 'barra', component: BarraFiltroComponent },
  { path: 'busca-visualizacion', component: BuscaVisualizacionComponent },
  { path: 'muestra', redirectTo: '/muestra-resultados', pathMatch: 'full' },
  { path: 'muestra-resultados', component: MuestraResultadosDeFiltroComponent } // Definimos la ruta
  { path: 'resenas', component: VisualizacionResenasComponent },
  { path: 'vis-resenas', redirectTo: '/resenas', pathMatch: 'full' },
   { path: 'registro-resena', component: RegistroResenaComponent },
  { path: 'reg-resena', redirectTo: '/registro-resena', pathMatch: 'full' }, // Redireccionar a la ruta de la reseña por defecto
  { path: '**', redirectTo: '/registro-resena', pathMatch: 'full' } // Manejo de rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
