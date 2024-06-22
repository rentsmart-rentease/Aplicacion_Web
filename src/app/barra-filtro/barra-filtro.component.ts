// barra-filtro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-filtro',
  templateUrl: './barra-filtro.component.html',
  styleUrls: ['./barra-filtro.component.css']
})
export class BarraFiltroComponent {

  constructor(private router: Router) { }

  irABuscaVisualizacion() {
    this.router.navigate(['/busca-visualizacion']);
  }
}

