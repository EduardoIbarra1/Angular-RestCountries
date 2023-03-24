import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = ''
  bandError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisesService:PaisesService){

  }

  buscar(termino:string){
    this.termino = termino
    this.bandError = false;
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
    //TODO: obtener sugerencias
  }
}
