import { Component } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent {

  imagePath = '../../../assets/img/s-dni.png';
  condicion: boolean = false;

  onButtonClick() {
    this.imagePath = '../../../assets/img/c-dni.png';
    this.condicion = true;
  }

}
