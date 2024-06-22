import { Component } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {

  imagePath = '../../../assets/img/s-foto.png';
  condicion: boolean = false;

  onButtonClick() {
    this.imagePath = '../../../assets/img/c-foto.png';
    this.condicion = true;
  }

}
