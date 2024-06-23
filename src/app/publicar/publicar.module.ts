import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformacionComponent } from './informacion/informacion.component';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    PublicarComponent,
    InformacionComponent,
    EndComponent
  ],
  imports: [
    CommonModule,
    PublicarRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicarModule { }
