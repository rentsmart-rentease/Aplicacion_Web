import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-busca-visualizacion',
  templateUrl: './busca-visualizacion.component.html',
  styleUrls: ['./busca-visualizacion.component.css']
})
export class BuscaVisualizacionComponent {

  constructor(private location: Location) { }

  regresar() {
    this.location.back();
  }
}
