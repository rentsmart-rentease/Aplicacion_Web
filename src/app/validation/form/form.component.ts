import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidationService } from "../validation.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})

export class FormComponent implements OnInit {
  form: FormGroup;
  formErrors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder, private validationService: ValidationService) {
    this.form = this.fb.group({
      
      // Campos del formulario, formato:
      // title: ['', [Validators.required, Validators.minLength(5)]],
      // description: ['', [Validators.required, Validators.minLength(10)]],
      
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.formErrors = this.validationService.validateForm(this.form);
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);
      // Subir formulario al servidor
    } else {
      this.formErrors = this.validationService.validateForm(this.form);
    }
  }
}
