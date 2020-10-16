import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    heroe:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
  ) {

            this.activatedRoute.params.subscribe( params =>{
            //  console.log ( params ); //path: 'heroe/:id' es id xq en routers.ts esta declarado id si hubiera sido nombre le tendriamos que poner eso
            this.heroe = this._heroesService.getHeroe(params['id']);
              // console.log ( this.heroe );
          });
   }


}
