import { MainModule } from './../main.module';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { ResaltadosComponent } from './resaltados/resaltados.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ResultadosComponent,
    ListaComponent,
    ResaltadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    MaterialModule,
    MainModule
  ],
  exports: [
    ResultadosComponent, ListaComponent, ResaltadosComponent
  ]
})
export class ResultadosModule { }
