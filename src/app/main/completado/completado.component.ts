import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Confirmacion } from '../servicios/confirmacion.service';

@Component({
  selector: 'app-completado',
  templateUrl: './completado.component.html',
  styleUrl: './completado.component.css'
})
export class CompletadoComponent {

  constructor(private router: Router, private confirmacion: Confirmacion) { 
    this.confirmacion.changeMessage('Reservado');
  }

  volverInmueble() {
    this.router.navigate(['/main/publicacion']);
  }

}
