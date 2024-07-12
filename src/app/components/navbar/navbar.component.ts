import { Component, OnInit } from '@angular/core';

/*------conectar servicio---------*/
import { JuegosService } from 'src/app/services/juegos.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  ocultarLogin = false;
  constructor(private conectarServicio:JuegosService ) { }

  ngOnInit(): void {
  
    /*
    if( localStorage.getItem('token') ){
      
      $(".boton").css('display', 'block');
      $(".boton_login").css('display', 'none');
      
    }
    */

  }
  

  cerrarSession(){
  
    /*
    this.conectarServicio.cerrarSession()
    $(".boton").css('display', 'none');
    $(".boton_login").css('display', 'block');
    */
  }
  

}
