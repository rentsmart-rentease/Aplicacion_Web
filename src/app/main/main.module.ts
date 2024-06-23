import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BarraFiltroComponent } from './categories/barra-filtro/barra-filtro.component';

import { MaterialModule } from '../material/material.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CompletadoComponent } from './completado/completado.component';
import { CommunicationModule } from './communication/communication.module';
import { ContactoComponent } from './contacto/contacto.component';
import { ChatsitoComponent } from './contacto/chatsito/chatsito.component';
import { ForumComponent } from './contacto/forum/forum.component';
import { AppointmentsModule } from './contacto/appointments/appointments.module';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    BarraFiltroComponent,
    PublicacionComponent,
    ReservarComponent,
    CompletadoComponent,
    ContactoComponent,
    ChatsitoComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommunicationModule,
    AppointmentsModule
  ],
  exports: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    BarraFiltroComponent,
    ChatsitoComponent,
    ForumComponent
  ]
})
export class MainModule { }
