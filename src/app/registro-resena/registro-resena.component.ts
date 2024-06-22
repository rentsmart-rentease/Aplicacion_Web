import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-resena',
  templateUrl: './registro-resena.component.html',
  styleUrls: ['./registro-resena.component.css']
})
export class RegistroResenaComponent {
  enviarResena() {
    // Aquí puedes agregar la lógica para enviar la reseña
    alert('Reseña enviada!');
  }
}
