import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[`
    li{
      cursor: pointer;
    }
    a{
      text-decoration: none;
    }
  `]
})
export class PorPaisComponent {

  termino: string = ''
  bandError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false

  constructor(private PaisesService:PaisesService){

  }

  buscar(termino:string){
    this.termino = termino
    this.bandError = false;
    this.mostrarSugerencias =false;
    this.PaisesService.buscarPais(this.termino)
    .subscribe({
      next: ((resp)=>{
        this.paises = resp;
      }),
      error: ((err)=>{
        this.bandError = true;
        this.paises = []
      })
    });
  }

  sugerencias(termino:string){
    this.bandError = false
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.PaisesService.buscarPais(termino)
    .subscribe({
      next: (paises =>{
        this.paisesSugeridos = paises.splice(0, 5)
      }),
      error: (error=>{
        this.paisesSugeridos = [];
      })
    })
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }
}
