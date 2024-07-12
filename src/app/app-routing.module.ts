import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*----importar paginas---*/
import { HomeComponent } from './pages/home/home.component';
import { JuegosenvivoComponent } from './pages/juegosenvivo/juegosenvivo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TarjetaVideoComponent } from './components/tarjeta-video/tarjeta-video.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

/*----guard----*/
import { JuegosGuard } from './guard/juegos.guard'; 


const routes: Routes = [

  
  { path: "juegos",       component: JuegosenvivoComponent }, //canActivate: [ JuegosGuard  ]
  { path: "home",         component: HomeComponent },
  { path: "detalle/:id",  component: DetalleComponent },
  { path: "videos",       component: TarjetaVideoComponent },
  { path: "login",        component: LoginComponent },
  { path: "registro",      component: RegistroComponent},

  { path: "**", pathMatch: "full", redirectTo: "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
