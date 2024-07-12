import { Component, OnInit } from '@angular/core';

/*----importar form group---*/
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

/*------conectar servicio-------*/
import { JuegosService } from "../../services/juegos.service"

import Swal from 'sweetalert2'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formularios:FormGroup;
  emailExiste = false;


  constructor(private fb:FormBuilder, private conectarServicio: JuegosService ) {

    
    this.formularios = this.fb.group({
      
      nombre  :  ["", [Validators.required, Validators.minLength(10)] ],
      correo  :  ["", [Validators.required, Validators.minLength(5), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      pass    :  ["", [Validators.required, Validators.minLength(7)]],
      pass2   :  ["", Validators.required]

    })
    

    //this.escucharEmail();
    //this.cargarDatosBase();
  }



  ngOnInit(): void {}

  /*-----validaciones---(TRUE O FALSE)----*/
  get errorNombre(){
    return this.formularios.controls['nombre'].invalid && this.formularios.controls['nombre'].touched;
  }

  get errorCorreo(){
    return this.formularios.controls['correo'].invalid && this.formularios.controls['correo'].touched;
  }

  get errorPass(){
    return this.formularios.controls['pass'].invalid && this.formularios.controls['pass'].touched;
  }

  get errorPass2(){
    
    const pass1 = this.formularios.controls['pass'].value;
    const pass2 = this.formularios.controls['pass2'].value;

    if(pass1 == pass2){
      return false;
    }else{
      return true;
    }
  }




 /*--

  escucharEmail(){
      
    this.formularios.controls['correo'].valueChanges.subscribe( resp => {
      console.log(resp);
    })
  }

  cargarDatosBase(){
      
      this.formularios.reset({

        nombre: "carlos alberto",
        correo: "wario.8@hotmail.com",
        pass  : "ecoutores09",
        pass2 : "ecoutores09"

      })

    }
---*/
 
  registrar(){
    
    if(this.formularios.invalid){
      
      Object.values( this.formularios.controls ).forEach( campos => {
        campos.markAsTouched();
      })

    }else{
      
      this.conectarServicio.registrarUsuario( this.formularios )
          .subscribe( resp => {
            console.log(resp)
           
            Swal.fire(
              '¡Muy bien!',
              '¡Se ha registrado correctamente!',
              'success'
            )
            
          }, (err => {
            console.log(err.error.error.message);
            this.emailExiste = true;
          
          }));
        
     

      //console.log(this.formularios)

    }

    this.formularios.reset();
  
  }

}
