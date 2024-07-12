import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

/*----conectar servicio---------*/
import { JuegosService } from '../services/juegos.service';

/*-----usar ruta------*/
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class JuegosGuard implements CanActivate {
  
  constructor( private conectarServicio: JuegosService, private usarRuta:Router){}
  
  canActivate(): boolean  {
    
    if( this.conectarServicio.estaAutenticado() ){
      return true;
    }else{
      
      this.usarRuta.navigate(['login']);
      return false;
    }

    return true;
  }
  
}
