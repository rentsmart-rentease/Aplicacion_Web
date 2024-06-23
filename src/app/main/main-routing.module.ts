import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CompletadoComponent } from './completado/completado.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'resultados', loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosModule) },
      { path: 'publicacion', component: PublicacionComponent },
      { path: 'reservar', component: ReservarComponent },
      { path: 'reservar/completado', component: CompletadoComponent },
      { path: 'contacto', component: ContactoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
