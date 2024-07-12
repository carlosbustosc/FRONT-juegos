import { Component, OnInit } from '@angular/core';

/*---agrupamos informacion de formulario----*/
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


/*-------conectar servicio--------*/
import { JuegosService } from "../../services/juegos.service"

/*----usar ruta------*/
import { Router } from "@angular/router"

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  login:FormGroup

  emailNoValido = false;
  contrasenaNoValida = false;

  
  constructor(private fb: FormBuilder, private conectarServicios: JuegosService, private ruta:Router) {

    this.login = this.fb.group({
      correo : [ '',  Validators.required ],
      pass   : [ '',  Validators.required ],
      check : false
    })
  }


  ngOnInit(): void {
      
    if( localStorage.getItem('correo') ){
        
      this.login = this.fb.group({
        correo : localStorage.getItem('correo'),
        pass   : "",
        check  : true
      }) 
    }
   
  }


  ingresar(){
    
    this.conectarServicios.loginUsuario( this.login )
        .subscribe( resp => {
         
          console.log(resp);
          this.ruta.navigate(['juegos'])
          
          $(".boton").css('display', 'block');
          $(".boton_login").css('display', 'none');
          
          /*--si esta seleccionado el check--*/
          if(this.login.value.check == true){
            localStorage.setItem('correo', this.login.controls['correo'].value);
          }


        }, (err => {
        
          if((err.error.error.message === "INVALID_EMAIL") || (err.error.error.message === "EMAIL_NOT_FOUND")){
           
            this.emailNoValido = true;

          }else{

            this.contrasenaNoValida = true;
            this.emailNoValido = false;
          }
          
        }))
        
  }

}
