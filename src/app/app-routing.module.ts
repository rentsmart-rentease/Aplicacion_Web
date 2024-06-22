import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './enter/helpers/admin.guard';

const routes: Routes = [

  { path: '', loadChildren: () => import('./enter/enter.module').then(m => m.EnterModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [authGuard] }
  { path: '', loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
