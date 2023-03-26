import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
 
  pais!:Country[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private paisService:PaisesService
  ){ }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( (params)=> this.paisService.verPaisCodigo(params['id'])),
      tap(console.log)
    ).subscribe(pais => this.pais = pais)

    // es lo mismo a lo de arriba
    /*this.activatedRoute.params.subscribe( ({id}) =>{
      this.paisService.buscarPaisCodigo(id).subscribe(pais=>{
        this.pais = pais;
        console.log(this.pais);
      })
    })*/
  }

}
