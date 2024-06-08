import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { ListaComponent } from './lista/lista.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ResultadosComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    MaterialModule
  ],
  exports: [
    ResultadosComponent, ListaComponent
  ]
})
export class ResultadosModule { }
