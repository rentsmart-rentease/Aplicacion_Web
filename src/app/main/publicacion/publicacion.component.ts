import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Resena_Estructura } from './model/resena-model';
import { listaResenasNegativas, listaResenasOriginales, listaResenasPositivas, listaResenasRecientes } from './data/resenas-data';
import { ResenasService } from './service/resenas.service';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Confirmacion } from '../servicios/confirmacion.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicacionComponent implements OnInit{

  condicion_reservado: boolean = false;
  mensaje: string = "";
  readonly dialog = inject(MatDialog);

  constructor(
    private condicion_crear: Confirmacion) {}
  
  ngOnInit():void {
    this.condicion_crear.currentMessage.subscribe(message => this.mensaje = message);
    if(this.mensaje == "Reservado"){
      this.condicion_reservado = true;
    }
  }


  mostrarResenas() {
    const dialogRef = this.dialog.open(ResenaDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  crearResena() {
    const dialogRef = this.dialog.open(ResenaCrearDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-resena',
  templateUrl: 'resena-dialog.html',
  styleUrl: './resena-dialog.css',
  standalone: true,
  imports: [MatDialogModule, CommonModule, NgFor, ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResenaDialog implements OnInit{

  constructor(
    private servicioResenas: ResenasService,
  ) {}

  listaResenas: Resena_Estructura[] | undefined = [];
  listaResenasCompletas: Resena_Estructura[] | undefined = [];
  resenasFiltradas: Resena_Estructura[] | undefined= [];
  titulo:string = "";
  condicion:boolean = true;
  todo: number = -1;
  hay_filtro: boolean = false;
  label_boton: string = "Cargar más reseñas"

  ngOnInit():void {
    this.listaResenas = listaResenasOriginales;
    this.resenasFiltradas = this.listaResenas;
    this.titulo = "";
    this.obtenerResenas();
  }

  async obtenerResenas(){
    this.listaResenasCompletas = await this.servicioResenas.getResenas();
  }

  private readonly formBuilder = inject(NonNullableFormBuilder);
  formGroup = this.formBuilder.group({
      busqueda: ["", Validators.required]
  });

  buscar(){
    if(this.formGroup.invalid) {
      return;
    }
    const busqueda = this.formGroup.controls["busqueda"].value;
    this.filtro(busqueda);
    this.hay_filtro = true;
  }

  filtro(busqueda: string) {
    if (!this.listaResenasCompletas) {
      // Manejar el caso en que listaResenas es undefined, por ejemplo:
      console.error('listaResenas es undefined');
      return;
    }
  
    busqueda = busqueda.trim().toLowerCase();
    this.resenasFiltradas = this.listaResenasCompletas.filter(resena => {
      return resena.comentario.toLowerCase().includes(busqueda);
    });
  
    if (this.resenasFiltradas.length == 0) {
      this.condicion = false;
      this.titulo = "";
    }
  }

  filtroNulo(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue == ""){
      this.resenasFiltradas = this.listaResenas;
      this.condicion= true;
      this.hay_filtro = false;
      this.label_boton = "Cargar más reseñas";
      this.titulo = "";
    }
  }

  limpiar(){
    this.formGroup.controls["busqueda"].setValue("");
    this.resenasFiltradas = this.listaResenas;
    this.condicion = true;
    this.hay_filtro = false;
    this.label_boton = "Cargar más reseñas";
  }

  mostrarRecientes() {
    this.hay_filtro = true;
    this.resenasFiltradas = listaResenasRecientes;
    this.titulo = "Mostrando “Las más recientes”";
    this.condicion = true;
  }

  mostrarPositivas() {
    this.hay_filtro = true;
    this.resenasFiltradas = listaResenasPositivas;
    this.titulo = "Mostrando las “Positivas”";
    this.condicion = true;
  }

  mostrarNegativas() {
    this.hay_filtro = true;
    this.resenasFiltradas = listaResenasNegativas;
    this.titulo = "Mostrando las “Negativas”";
    this.condicion = true;
  }

  mostrarSinFiltros() {
    this.hay_filtro = false;
    this.resenasFiltradas = listaResenasOriginales;
    this.titulo = "";
    this.condicion = true;
  }

  mostrarMasResenas() {
    this.todo *= -1;
    if(this.todo == 1){
      this.resenasFiltradas = this.listaResenasCompletas;
      this.titulo = "Mostrando todas las reseñas";
      this.label_boton = "Ver menos reseñas";
    } else {
      this.resenasFiltradas = listaResenasOriginales;
      this.titulo = "";
      this.label_boton = "Cargar más reseñas";
    }
  }
}

@Component({
  selector: 'dialog-resena-crear',
  templateUrl: 'resena-crear-dialog.html',
  styleUrl: './resena-dialog.css',
  standalone: true,
  imports: [MatDialogModule, CommonModule, NgFor, ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResenaCrearDialog implements OnInit{

  resena: Resena_Estructura | undefined = undefined;
  condicion: boolean = false;

  constructor( 
    private servicioResenas: ResenasService
  ) {}

  ngOnInit():void {
  }

  private readonly formBuilder = inject(NonNullableFormBuilder);
  formGroup = this.formBuilder.group({
      calificacion: ["", Validators.required],
      comentario: ["", Validators.required]
  });

  enviarResena(){

    if(this.formGroup.invalid) {
      return;
    }

    const calificacion = this.formGroup.controls["calificacion"].value;
    const comentario = this.formGroup.controls["comentario"].value;

    this.resena = {
      nombre_usuario: "Usuario",
      foto: "user.png",
      tiempo: "unos segundos",
      calificacion: calificacion,
      comentario: comentario
    }

    this.servicioResenas.postResena(this.resena);

    this.formGroup.controls["calificacion"].setValue("");
    this.formGroup.controls["comentario"].setValue("");

    this.condicion = true;

  }
}