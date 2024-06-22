import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublInmuebleRoutingModule } from './publ-inmueble-routing.module';
import { PublInmuebleComponent } from './publ-inmueble.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublInmuebleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PublInmuebleRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ 
    PublInmuebleComponent,
    FormComponent
  ]
})
export class PublInmuebleModule { }
