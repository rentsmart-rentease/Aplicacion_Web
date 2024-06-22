import { Component } from '@angular/core';

@Component({
  selector: 'app-muestra-resultados-de-filtro',
  templateUrl: './muestra-resultados-de-filtro.component.html',
  styleUrls: ['./muestra-resultados-de-filtro.component.css']
})
export class MuestraResultadosDeFiltroComponent {
  resultadosVisibles = false;
  propiedades = [
    { nombre: 'Propiedad 1', imagen: 'assets/img/propiedad 1.jpg', calificacion: [1, 2, 3, 4], caracteristicas: '50 metros cuadrados - San Isidro, Lima, Perú - S/.5000 por mes' },
    { nombre: 'Propiedad 2', imagen: 'assets/img/propiedad 2.jpeg', calificacion: [1, 2, 3, 4, 5], caracteristicas: '20 metros cuadrados - Jesus María, Lima, Perú - S/.2000 por mes' },
    { nombre: 'Propiedad 3', imagen: 'assets/img/propiedad 3.jpeg', calificacion: [1, 2, 3], caracteristicas: '60 metros cuadrados - San Borja, Lima, Perú - S/.4000 por mes' }
  ];

  mostrarResultados() {
    this.resultadosVisibles = true;
  }

  cargarMas() {
    // Lógica para cargar más propiedades
  }
}
