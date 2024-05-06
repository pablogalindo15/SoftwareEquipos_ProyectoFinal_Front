import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioModule } from './servicio/servicio.module';
import { ViviendaModule } from './vivienda/vivienda.module';
import { LugarModule } from './lugar/lugar.module';
import { PropietarioModule } from './propietario/propietario.module';
import { HabitanteModule } from './habitante/habitante.module';
import { ComentarioModule } from './comentario/comentario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViviendaModule,
    PropietarioModule,
    ServicioModule,
    LugarModule,
    ComentarioModule,
    HabitanteModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }