import { Resena_Estructura } from './../model/resena-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  private url = environment.apiUrl + '/resenas';

  constructor(private router: Router) { }

  async getResenas():Promise<Resena_Estructura[] | undefined>{
    try{
      const resultado = await fetch(this.url, {method: 'GET'});
      const datos = resultado.json();
      return datos;
    } catch (error){
      console.log(error);
    }
    return undefined;
  }

  async postResena(propiedad: Resena_Estructura){
    try{
      await fetch(this.url,
        {method: 'POST',
          body: JSON.stringify(propiedad),
          headers: {'Content-Type': 'application/json'}
        }
      )

      this.router.navigate(['/main/publicacion']);

    } catch(error){
      console.log(error);
    }
  }
}
