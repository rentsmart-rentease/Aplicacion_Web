import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { datosLogin } from '../models/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }
  
  signup() {
    if (this.form.invalid) {
      return;
    }
    
    const signUpData: datosLogin = this.form.value as datosLogin;
    
    this.registerService.signUp(signUpData).subscribe({
      next: (response:datosLogin ) => {
        this.router.navigate(['/register/foto']);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
      }
    });
  }

}
