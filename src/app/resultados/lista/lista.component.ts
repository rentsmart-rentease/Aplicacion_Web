import { InfoResultados } from '../model/inf-resultados.model';
import { listaInfoPropiedades } from './../data/datos_propiedades_resumido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  listaInfoPropiedades: InfoResultados[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listaInfoPropiedades = listaInfoPropiedades;
  }

  addData() {
    for(let i = 0; i < 3; i++) {
      const randomElementIndex = Math.floor(Math.random() * listaInfoPropiedades.length);
      this.listaInfoPropiedades.push(listaInfoPropiedades[randomElementIndex]);
    }
  }
}
