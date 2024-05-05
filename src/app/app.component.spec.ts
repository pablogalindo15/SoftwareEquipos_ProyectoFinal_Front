import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ViviendaListComponent } from './vivienda/vivienda-list/vivienda-list.component';
import { LugarListComponent } from './lugar/lugar-list/lugar-list.component';
import { PropietarioListComponent } from './propietario/propietario-list/propietario-list.component';
import { HabitanteListComponent } from './habitante/habitante-list/habitante-list.component';
import { ComentarioListComponent } from './comentario/comentario-list/comentario-list.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [
        AppComponent, ViviendaListComponent, LugarListComponent, PropietarioListComponent, HabitanteListComponent, ComentarioListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mynewapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mynewapp');
  });
});
