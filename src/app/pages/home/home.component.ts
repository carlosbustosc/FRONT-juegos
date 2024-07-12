import { Component, OnInit } from '@angular/core';

/*------importar servicios-----*/
import { JuegosService } from "../../services/juegos.service"

/*---enviar parametro-----*/
import { Router } from "@angular/router"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usarRuta: Router , private conectarServicio: JuegosService) { }
  
  juegosTarjeta:any[] = []

  imagenesSliderHome:any[] = []

  ngOnInit(): void {

    this.conectarServicio.getJuego()
        .subscribe( resp =>{

          for(let i=10; i<22; i++){
            console.log(resp[i]);
            this.juegosTarjeta.push(resp[i])
          }
          
        })

      /*----arreglo----*/
    this.imagenesSliderHome = this.conectarServicio.imagenesSliderHome();
    //console.log(this.imagenesSliderHome)
  }

  ver_detalle( id:number ){
    console.log(id);

    this.usarRuta.navigate( ['/detalle', id] )
  }

}
