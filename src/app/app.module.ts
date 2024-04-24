import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ViviendaModule } from './vivienda/vivienda.module';
import { LugarModule } from './lugar/lugar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropietarioModule } from './propietario/propietario.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViviendaModule,
    LugarModule,
    PropietarioModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
