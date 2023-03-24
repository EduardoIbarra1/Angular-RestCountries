import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  constructor(private http:HttpClient) {

   }

  buscarPais(pais:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${region}`;
    return this.http.get<Country[]>(url);
  }
  
}
