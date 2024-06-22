import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Resena_Estructura } from './model/resena-model';
import { listaResenasFiltrado } from './data/resenas-data';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  imports: [MatDialogModule, MatButtonModule, CommonModule, NgFor, ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResenaDialog implements OnInit{

  listaResenasFiltro: Resena_Estructura[] = [];
  resenasFiltradas: Resena_Estructura[] = [];
  titulo:string = "";
  condicion:boolean = true;

  constructor() {}

  ngOnInit():void {
    this.listaResenasFiltro = listaResenasFiltrado;
    this.titulo = "";
    this.resenasFiltradas = this.listaResenasFiltro;
  }

  private readonly formBuilder = inject(NonNullableFormBuilder);
  formGroup = this.formBuilder.group({
      busqueda: ["", Validators.required]
  });

  get busquedaField(): FormControl<string> {
    return this.formGroup.controls.busqueda as FormControl<string>;
  }

  buscar(){
    if(this.formGroup.invalid) {
      return;
    }
    const busqueda = this.formGroup.controls["busqueda"].value;
    this.filtro(busqueda);
  }

  filtro(busqueda: string) {
    busqueda = busqueda.trim().toLowerCase();
    this.resenasFiltradas = this.listaResenasFiltro.filter(resena => {
      return resena.comentario.toLowerCase().includes(busqueda);
    });

    if(this.resenasFiltradas.length == 0){
      this.condicion = false;
    }
  }

  filtroNulo(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue == ""){
      this.resenasFiltradas = this.listaResenasFiltro;
      this.condicion= true;
    }
  }

  limpiar(){
    this.formGroup.controls["busqueda"].setValue("");
    this.resenasFiltradas = this.listaResenasFiltro;
    this.condicion = true;
  }

}