import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environment/environment';
import { datosLogin } from './../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    private baseUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) { }
  
    signUp(signUpData: datosLogin): Observable<datosLogin> {
      const url = `${this.baseUrl}/usuarios`;
      return this.http.post<datosLogin>(url, signUpData);
    }
}