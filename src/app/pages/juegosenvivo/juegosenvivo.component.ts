import { Component, OnInit } from '@angular/core';

/*------importar servicios-----*/
import { JuegosService } from "../../services/juegos.service"

@Component({
  selector: 'app-juegosenvivo',
  templateUrl: './juegosenvivo.component.html',
  styleUrls: ['./juegosenvivo.component.css']
})
export class JuegosenvivoComponent implements OnInit {

  todosLosJuegos:any[] = []
  busquedaDeJuegos:any = [] 

  mostrarBusqueda = false;
  mostrarJuegos   = true;

  categoriaError  = false;

  nombreBienvenido:string = ""

  constructor(private conectarServicio: JuegosService) { }


  ngOnInit(): void {
    
    this.conectarServicio.getJuego()
    .subscribe( resp =>{

      for(let i=0; i<359; i++){
        //console.log(resp[i]);
        this.todosLosJuegos.push(resp[i])
      }
      
      
      //cargar nombre
      if( localStorage.getItem('nombre') ){
        this.nombreBienvenido  = " ¡Bienvenido " + localStorage.getItem('nombre'); 
      }
         
      
    })

  }




  buscar( nombre:string ){
    
    this.mostrarBusqueda = true;
    this.mostrarJuegos   = false;


    let name = nombre.toLowerCase();
    //console.log(name)

    this.conectarServicio.buscarJuego( name )
        .subscribe( resp => {
          
          this.busquedaDeJuegos = resp;
          this.categoriaError = false;

        }, 

        ( error => {
          
          this.categoriaError = true;
          this.mostrarBusqueda = false;

        })
        
        )

  }

}
