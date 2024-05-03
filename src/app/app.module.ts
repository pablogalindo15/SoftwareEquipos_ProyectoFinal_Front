import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ViviendaModule } from './vivienda/vivienda.module';
import { LugarModule } from './lugar/lugar.module';
import { PropietarioModule } from './propietario/propietario.module';
import { HabitanteModule } from './habitante/habitante.module';
import { ComentarioComponent } from './comentario/comentario';
import { ComentarioListComponent } from './comentario/comentario-list/comentario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentarioComponent,
    ComentarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViviendaModule,
    PropietarioModule,
    LugarModule,
    HabitanteModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
