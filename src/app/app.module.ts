import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ValidationModule } from "./validation/validation.module";
import { AppComponent } from "./app.component";
import { AppointmentsModule } from "./appointments/appointments.module";
import { CommunicationModule } from "./communication/communication.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro/muestra-resultados-de-filtro.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MultimediaModule } from "./multimedia/multimedia.module";
import { ValidationModule } from "./validation/validation.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './forum/forum.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { VisualizacionResenasComponent } from './visualizacion-resenas/visualizacion-resenas.component';
import { RegistroResenaComponent } from './registro-resena/registro-resena.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BarraFiltroComponent } from './barra-filtro/barra-filtro.component';
import { BuscaVisualizacionComponent } from './busca-visualizacion/busca-visualizacion.component';
import { InfoPropComponent } from './info-prop/info-prop.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChatsitoComponent } from './chatsito/chatsito.component';

import { FooterComponent } from './shared/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: BarraFiltroComponent }, // Ruta predeterminada
  // Otras rutas según sea necesario
];

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InfoPropComponent
    BarraFiltroComponent,
    BuscaVisualizacionComponent,
    MuestraResultadosDeFiltroComponent,
    ListingComponent,
    AddListingComponent,
    VisualizacionResenasComponent,
    RegistroResenaComponent,
    ContactInfoComponent,
    ForumComponent,
    ChatsitoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MultimediaModule,
    ValidationModule,
    AppointmentsModule,
    CommunicationModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}

