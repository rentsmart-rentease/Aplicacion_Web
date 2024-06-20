import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro/muestra-resultados-de-filtro.component'; // Importamos el componente

@NgModule({
  declarations: [
    AppComponent,
    MuestraResultadosDeFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
