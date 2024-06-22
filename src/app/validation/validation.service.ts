import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})

export class ValidationService {
  constructor() {}

  validateForm(form: FormGroup): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    Object.keys(form.controls).forEach((key) => {
      const controlErrors = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((errorKey) => {
          errors[key] = this.getErrorMessage(errorKey, key);
        });
      }
    });

    return errors;
  }

  getErrorMessage(errorKey: string, field: string): string {
    const errorMessages: { [key: string]: string } = {
      required: `${field} es requerido`,
      minlength: `${field} no cumple con la longitud mínima`,
    };

    return errorMessages[errorKey] || `Existe un error en el campo "${field}" tiene un error`;
  }
}
