import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Resena_Estructura } from './model/resena-model';
import { listaResenasNegativas, listaResenasOriginales, listaResenasPositivas, listaResenasRecientes } from './data/resenas-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.component.html',
  styleUrl: './resena.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ResenaComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ResenaDialog);

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
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResenaDialog implements OnInit{

  listaResenas: Resena_Estructura[] = [];
  titulo:string = "";

  constructor() {}

  ngOnInit():void {
    this.listaResenas = listaResenasOriginales;
    this.titulo = "";
  }

  mostrarRecientes() {
    this.listaResenas = listaResenasRecientes;
    this.titulo = "Mostrando “Las más recientes”";
  }

  mostrarPositivas() {
    this.listaResenas = listaResenasPositivas;
    this.titulo = "Mostrando las “Positivas”";
  }

  mostrarNegativas() {
    this.listaResenas = listaResenasNegativas;
    this.titulo = "Mostrando las “Negativas”";
  }

  mostrarSinFiltros() {
    this.listaResenas = listaResenasOriginales;
    this.titulo = "";
  }
}