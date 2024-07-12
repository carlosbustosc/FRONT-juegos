import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegosenvivoComponent } from './pages/juegosenvivo/juegosenvivo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { SliderComponent } from './components/slider/slider.component';

/*---usar http---*/
import { HttpClientModule } from '@angular/common/http';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

import { VideosComponent } from './pages/videos/videos.component';
import { TarjetaVideoComponent } from './components/tarjeta-video/tarjeta-video.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component'


/*---importar modulo de formularios--*/
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegosenvivoComponent,
    NavbarComponent,
    CreditosComponent,
    SliderComponent,
    TarjetaComponent,
    DetalleComponent,
    VideosComponent,
    TarjetaVideoComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
