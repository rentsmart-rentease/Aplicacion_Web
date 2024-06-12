import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterRoutingModule } from './enter-routing.module';
import { EnterComponent } from './enter.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FotoComponent } from './foto/foto.component';
import { DniComponent } from './dni/dni.component';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    EnterComponent,
    RegisterComponent,
    FotoComponent,
    DniComponent,
    EndComponent
  ],
  imports: [
    CommonModule,
    EnterRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnterModule { }
