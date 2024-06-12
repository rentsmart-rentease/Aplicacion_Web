import { Component, OnInit, inject } from '@angular/core';
import { datosLogin } from './models/login.model';
import { Router } from '@angular/router';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

const datos: datosLogin[]= [
  {
    email: "rentease@gmail.com",
    password: "rentease123"
  }
];

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css'
})
export class EnterComponent implements OnInit {

  private readonly formBuilder = inject(NonNullableFormBuilder);

  formGroup = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  get emailField(): FormControl<string> {
    return this.formGroup.controls.email as FormControl<string>;
  }
  get passwordField(): FormControl<string> {
    return this.formGroup.controls.password as FormControl<string>;
  }

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  loguearse(){
    if(this.formGroup.invalid) {
      return;
    }

    const email = this.formGroup.controls["email"].value;
    const password = this.formGroup.controls["password"].value;

    if(datos.find(d => d.email === email && d.password === password)) {
      this.ruta.navigate(["/main"]);
    }

  }


}
