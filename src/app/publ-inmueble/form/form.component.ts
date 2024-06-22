import { Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { condicionValidator, descValidator } from './validacion-form';
import { Destacados } from '../../resultados/model/destacados';
import { DestacadosService } from '../../servicios/destacados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  private readonly formBuilder = inject(NonNullableFormBuilder);

  formGroup = this.formBuilder.group({
    titulo: ["", Validators.required],
    condicion: ["", [Validators.required, condicionValidator] ],
    tamano: ["", Validators.required],
    ubicacion: ["", Validators.required],
    precio: ["", Validators.required],
    desc: ["", [Validators.required, descValidator]],
    imagen: ["", Validators.required]
  });

  get tituloField(): FormControl<string> {
    return this.formGroup.controls.titulo as FormControl<string>;
  }
  get condicionField(): FormControl<string> {
    return this.formGroup.controls.condicion as FormControl<string>;
  }
  get tamanoField(): FormControl<string> {
    return this.formGroup.controls.tamano as FormControl<string>;
  }
  get ubicacionField(): FormControl<string> {
    return this.formGroup.controls.ubicacion as FormControl<string>;
  }
  get precioField(): FormControl<string> {
    return this.formGroup.controls.precio as FormControl<string>;
  }
  get descField(): FormControl<string> {
    return this.formGroup.controls.desc as FormControl<string>;
  }
  get imagenField(): FormControl<string> {
    return this.formGroup.controls.imagen as FormControl<string>;
  }

  ngOnInit(): void {
  }

  constructor(private propiedadService: DestacadosService) {}

  guardarPropiedad() {
    if(this.formGroup.invalid) {
      return;
    }

    const propDestacada: Destacados = {
      titulo: this.formGroup.controls["titulo"].value,
      condicion: this.formGroup.controls["condicion"].value,
      tamano: parseFloat(this.formGroup.controls["tamano"].value),
      ubicacion: this.formGroup.controls["ubicacion"].value,
      precio: parseFloat(this.formGroup.controls["precio"].value),
      desc: parseFloat(this.formGroup.controls["desc"].value),
      imagen: this.formGroup.controls["imagen"].value,
    };

    this.propiedadService.postPropiedad(propDestacada);

    console.log(propDestacada);

  }

}
