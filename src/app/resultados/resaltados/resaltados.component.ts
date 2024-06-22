import { Component, OnInit } from '@angular/core';
import { DestacadosService } from '../../servicios/destacados.service';
import { Destacados } from '../model/destacados';

@Component({
  selector: 'app-resaltados',
  templateUrl: './resaltados.component.html',
  styleUrl: './resaltados.component.css'
})
export class ResaltadosComponent implements OnInit{

  constructor(private destServicio:DestacadosService) { }

  listaDestacados:Destacados[] | undefined = [];

  ngOnInit(): void {
    this.mostrarDestacados();
  }

  async mostrarDestacados(){
    this.listaDestacados = await this.destServicio.getDestacados();
    console.log(this.listaDestacados);
  }

}
