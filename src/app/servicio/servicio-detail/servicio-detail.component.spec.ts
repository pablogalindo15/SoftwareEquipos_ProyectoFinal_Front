/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ServicioDetailComponent } from './servicio-detail.component';
import { ServicioDetail } from '../servicio-detail';
import { faker } from '@faker-js/faker';
enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante};

describe('ServicioDetailComponent', () => {
  let component: ServicioDetailComponent;
  let fixture: ComponentFixture<ServicioDetailComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetailComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    const servicioDetail = new ServicioDetail(
      faker.lorem.word(),
      faker.number.int(),
      tipoServicio.restaurante
    );

    component.servicioDetail = servicioDetail;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with servicioDetail.nombre', () => {
    const nameElement: HTMLElement = debugElement.query(By.css('p.h3.p-3')).nativeElement;
    expect(nameElement.textContent).toContain(component.servicioDetail.nombre);
  });
});
