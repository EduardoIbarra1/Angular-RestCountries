import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  get getHttpParams(){
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2')
  }
  constructor(private http:HttpClient) {

   }

  buscarPais(pais:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }

  buscarRegion(region:string):Observable<Country[]>{ 
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams})
    .pipe(
      tap(console.log)
    )
  }

  buscarCapital(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${region}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }
  
  verPaisCodigo(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
