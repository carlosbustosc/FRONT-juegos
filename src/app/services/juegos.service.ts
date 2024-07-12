import { Injectable } from '@angular/core';

/*---usar httpClient---*/
import { HttpClient, HttpHeaders } from '@angular/common/http'

/*---importar map-------*/
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})

export class JuegosService {
  
  TokenId:any;
  


  private imagenesSlider:any [] = [

    { url : 'https://img.youtube.com/vi/eOiUtRF8k28/maxresdefault.jpg'},
    { url : 'https://i.ytimg.com/vi/GVpBBxlFVp8/maxresdefault.jpg'},
    { url : 'https://i.ytimg.com/vi/Ow2cL-pp6p8/maxresdefault.jpg'},
    { url : 'https://i.ytimg.com/vi/-tIAazzD1gk/maxresdefault.jpg'},
    { url : 'https://media.vandal.net/m/11-2020/2020112218265558_1.jpg'},
    { url : 'https://media.revistagq.com/photos/604ba9dc9fc97c95e82c1ccf/master/w_1920,h_1080,c_limit/Fallout-New-Vegas.jpeg'},
    { url : 'https://www.laps4.com/wp-content/uploads/2021/09/Ghostrunner-Neon-Pack.jpg'},
    { url : 'https://media.vandal.net/m/9-2021/202192119292543_1.jpg'},
    { url : 'https://allgamersin.com/wp-content/uploads/2018/06/The-Crew-2-1-1.jpg'},
    { url : 'https://generacionxbox.com/wp-content/uploads/2021/06/doom-eternal-parche-next-gen-generacionxbox.jpg'}

  ];


  constructor(private http:HttpClient) {
    this.TokenId = ""

    this.leerToken()
   }
  
 

  /*--cargue imagenes json---*/
  imagenesSliderHome(){
    return this.imagenesSlider;
  }


  /*---obtener todos los juegos get---*/
  getJuego(){
    
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '51eafa0b14msh8514f6f6563ed13p12ba0bjsn0d4d299ca525'
    });

    return this.http.get<any>("https://free-to-play-games-database.p.rapidapi.com/api/games",   { headers }  );
  }



  /*---obtehner un juego---*/
  getUnJuego( id:any){

    let headers = new HttpHeaders({
                        
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '51eafa0b14msh8514f6f6563ed13p12ba0bjsn0d4d299ca525'
    });

    // https://www.freetogame.com/api/game?id=452
    
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ id }`, { headers } );

  }

  //https://www.freetogame.com/api-doc
  //https://rapidapi.com/digiwalls/api/free-to-play-games-database



  buscarJuego( nombre:string ){
    
    let headers = new HttpHeaders({
      'x-rapidapi-host' : 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key'  : '51eafa0b14msh8514f6f6563ed13p12ba0bjsn0d4d299ca525'
    });

    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${ nombre }`, { headers });
    
  }



  /*------Registrar un usuario------*/
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  registrarUsuario( formulario:any ){
    
    const datos = {
      
      displayName:  formulario.controls['nombre'].value,
      email     :  formulario.controls['correo'].value,
      password   :  formulario.controls['pass'].value,
      returnSecureToken : true,

    };
    
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_3iSzX2x9xs0BkXCmcg_Gp8NO65wCFZg`,  datos  )                  
    //console.log(datos);
  }





  /*----autenticar usuario----*/
  loginUsuario( login: any){
   // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

   const dataLogin = {
    
    email     : login.controls['correo'].value,
    password  : login.controls['pass'].value,
    returnSecureToken: true
   }

   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_3iSzX2x9xs0BkXCmcg_Gp8NO65wCFZg`, dataLogin)
                   .pipe(
                    map( (resp:any) => {
                      //console.log(resp['idToken'])
                       
                      localStorage.setItem('nombre', resp.displayName ); 
                      this.guardarToken( resp['idToken'] )
                      return resp;

                    })
                   )           

  }




  /*---guardar token localStorage-----*/
  private guardarToken( token:string ){
    
    this.TokenId = token;
    localStorage.setItem('token', token);
  
  }

  

  
  /*---leer token al cargar la pagina---*/
  leerToken(){

    if( localStorage.getItem( 'token' ) ){
      
      this.TokenId = localStorage.getItem("token") 
      //alert(this.TokenId)
  
    }else{

      this.TokenId = ""
    }

  }


  /*----comprobar si esta autenticado---*/
  estaAutenticado():boolean{

    return this.TokenId.length > 0;
  }



  /*---cerrar session---*/
  cerrarSession(){

    localStorage.removeItem('token');
  
  }

}

  
