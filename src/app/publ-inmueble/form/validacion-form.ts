import { AbstractControl, ValidationErrors } from "@angular/forms";

export const condicionValidator = (control:AbstractControl): ValidationErrors | null => {
    const condicion:string = control.value;
    if(condicion != "Oferta" && condicion != "Publicidad") {
        return {invalidCondicion:true};
    }

    return null;
}

export const descValidator = (control:AbstractControl): ValidationErrors | null => {
    const descuento:number = parseFloat(control.value);
    if(descuento != 0 && (descuento < 15 || descuento > 95)) {
        return {invalidDescuento:true};
    }

    return null;
}