import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { ResaltadosComponent } from './resaltados/resaltados.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ResultadosComponent,
    ResaltadosComponent,
    ResaltadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    MaterialModule
  ],
  exports: [
    ResultadosComponent,
    ResaltadosComponent
  ]
})
export class ResultadosModule { }
