import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule

    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
