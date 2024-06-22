import { Component, OnInit, inject } from '@angular/core';
import { datosLogin } from './models/login.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css'
})
export class EnterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginServicio: LoginService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const credentials: datosLogin = this.form.value;

    this.loginServicio.login(credentials).subscribe({
      next: (response: datosLogin) => {
        this.router.navigate(['/main/home']); // Redirigir a la página principal
      },
    });
  }

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

}
