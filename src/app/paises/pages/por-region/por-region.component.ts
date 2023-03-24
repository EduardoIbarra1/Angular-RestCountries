import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  termino: string = ''
  bandError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisesService:PaisesService){

  }

  buscar(termino:string){
    this.termino = termino
    this.bandError = false;
    this.PaisesService.buscarRegion(this.termino)
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
