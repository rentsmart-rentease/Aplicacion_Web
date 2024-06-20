import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro/muestra-resultados-de-filtro.component'; // Importamos el componente

const routes: Routes = [
  { path: '', redirectTo: '/muestra-resultados', pathMatch: 'full' },
  { path: 'muestra-resultados', component: MuestraResultadosDeFiltroComponent } // Definimos la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
