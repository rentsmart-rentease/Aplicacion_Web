import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResenaComponent } from './resena.component';

const routes: Routes = [{ path: '', component: ResenaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResenaRoutingModule { }
