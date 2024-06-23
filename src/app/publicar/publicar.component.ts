import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosPublicacion } from './model/publicacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrl: './publicar.component.css'
})
export class PublicarComponent implements OnInit{
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      tamano: ['', Validators.required],
      num_personas: ['', Validators.required],
      equipamiento: ['', Validators.required],
      accesibilidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registro(): void {
    if (this.form.invalid) {
      return;
    }

    const credentials: DatosPublicacion = this.form.value;

    console.log(credentials);

    this.router.navigate(['/publicar/informacion']);

  }
}
