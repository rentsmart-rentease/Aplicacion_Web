import { Injectable } from '@angular/core';
import { Destacados } from '../resultados/model/destacados';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DestacadosService {

  url:string = "https://api-rent-ease.vercel.app/destacados"

  constructor(private router: Router) { }

  async getDestacados():Promise<Destacados[] | undefined>{
    try{
      const resultado = await fetch(this.url, {method: 'GET'});
      const datos = resultado.json();
      return datos;
    } catch (error){
      console.log(error);
    }
    return undefined;
  }

  async postPropiedad(propiedad: Destacados){
    try{
      await fetch(this.url,
        {method: 'POST',
          body: JSON.stringify(propiedad),
          headers: {'Content-Type': 'application/json'}
        }
      )

      this.router.navigate(['']);

    } catch(error){
      console.log(error);
    }
  }
}
