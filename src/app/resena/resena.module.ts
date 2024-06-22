import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResenaRoutingModule } from './resena-routing.module';
import { ResenaComponent } from './resena.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ResenaRoutingModule,
    ResenaComponent,
    ReactiveFormsModule
  ]
})
export class ResenaModule { }
