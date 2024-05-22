import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicioListComponent } from './servicio-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Servicio } from '../servicio';
import { faker } from '@faker-js/faker';
import { ServicioService } from '../servicio.service';


describe('ServicioListComponent', () => {
  let component: ServicioListComponent;
  let fixture: ComponentFixture<ServicioListComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ServicioListComponent ],
      providers: [ServicioService]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioListComponent);
    component = fixture.componentInstance;

    enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante};

    for (let i = 0; i < 10; i++) {
      const servicio = new Servicio(
        faker.number.int(),
        faker.lorem.word(),
        faker.number.int(),
        tipoServicio.restaurante
      );

      component.servicios.push(servicio);

    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 });

