import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './enter.component';
import { RegisterComponent } from './register/register.component';
import { FotoComponent } from './foto/foto.component';
import { DniComponent } from './dni/dni.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  { path: '', component: EnterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/foto', component: FotoComponent },
  { path: 'register/dni', component: DniComponent },
  { path: 'register/end', component: EndComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterRoutingModule { }
