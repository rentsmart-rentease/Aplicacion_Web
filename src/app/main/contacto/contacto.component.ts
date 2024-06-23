import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Confirmacion } from '../servicios/confirmacion.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent implements OnInit{

  condicion_reservado: boolean = false;
  mensaje: string = "";

  constructor(
    private condicion_crear: Confirmacion,
    private location: Location) {}
  
  ngOnInit():void {
    this.condicion_crear.currentMessage.subscribe(message => this.mensaje = message);
    if(this.mensaje == "Reservado"){
      this.condicion_reservado = true;
    }
  }

  volver(){
    this.location.back();
  }

}
