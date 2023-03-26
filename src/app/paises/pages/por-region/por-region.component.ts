import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})

export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActive: string = ''

  bandError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisesService:PaisesService){

  }

  getClaseCSS(region:string):string{
    return (region === this.regionActive)
     ? 'btn btn-primary' 
     : 'btn btn-outline-primary'
  }

  activarRegion(region:string){
    this.regionActive = region
    this.bandError = false;
    this.PaisesService.buscarRegion(this.regionActive)
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

  
}
