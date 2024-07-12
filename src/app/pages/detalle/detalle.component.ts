import { Component, OnInit } from '@angular/core';

/*----recibir parametro---*/
import { ActivatedRoute, Router } from "@angular/router"

/*---importar servicios----*/
import { JuegosService } from "../../services/juegos.service"

/*---ubicacion----*/
import { Location } from "@angular/common"

declare var $: any;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  detalleJuego:any = {};
  imagenFondo:any  = {};

  comprobarLength:any[] = []/*---metemos el objeto (detalleJuego) aca--*/

  constructor(private ubicacion: Location, private usarRuta: Router, private recibirParametro: ActivatedRoute, private conectarservicios: JuegosService){ }

  ngOnInit(): void {
  
    this.recibirParametro.params.subscribe( resp => {
      //console.log(resp['id']);
      this.conectarservicios.getUnJuego( resp['id'] )
          .subscribe( (resp:any) => {  
            console.log( resp );
            this.detalleJuego = resp;
            


            /*---imagen de fondo--*/
            this.imagenFondo = {
              'background-image' : `url(${resp.screenshots[2].image})`,
              'background-size'  : 'cover'
            }
            /*---imagen de fondo--*/
            


            /*---metemos el objeto en un array para comprobar el length--*/
            this.comprobarLength.push(this.detalleJuego) 
            //console.log( this.comprobarLength.length );

          
          })
    
    })

  }


  volverPantalla(){
    
    this.ubicacion.back();
  }

}
