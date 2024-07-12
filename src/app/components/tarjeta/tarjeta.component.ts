import { Component, OnInit, Input } from '@angular/core';

/*---Usar ruta para enviar parametro---*/
import { Router } from "@angular/router"

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  
  @Input() juegos:any[] = []

  constructor(private ruta:Router) { }

  ngOnInit(): void {

    console.log(this.juegos)
  }

  verDetalle( id:string ){
    /*console.log( id );*/
    this.ruta.navigate( ['/detalle', id] )
  }

}
