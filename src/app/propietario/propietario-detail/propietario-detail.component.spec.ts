import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PropietarioDetailComponent } from './propietario-detail.component';
import { Vivienda } from '../../vivienda/vivienda';
import { faker } from '@faker-js/faker';
import { posiblesEstratos, tipoVivienda } from '../../vivienda/vivienda-detail';
import { Propietario } from '../propietario';
import { PropietarioDetail } from '../propietario-detail';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


describe('PropietarioDetailComponent', () => {
  let component: PropietarioDetailComponent;
  let fixture: ComponentFixture<PropietarioDetailComponent>;
  let debug: DebugElement;


  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [PropietarioDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(PropietarioDetailComponent);
    component = fixture.componentInstance;
  
  
     component.propietarioDetail= new PropietarioDetail(
      faker.number.int(),
      faker.image.url(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      []
       );
  
  
     fixture.detectChanges();
     debug = fixture.debugElement;
    });

     it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should have a p.h3.p-3 element with propietarioDetail.nombre', () => {
      const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
      expect(element.textContent).toContain(component.propietarioDetail.nombre);
    });
    it('should have an img element with src= propietarioDetail.foto', () => {
      expect(debug.query(By.css('img')).attributes['src']).toEqual(
        component.propietarioDetail.foto
      );
    });
   
    it('should have an img element with alt= propietarioDetail.nombre', () => {
      expect(debug.query(By.css('img')).attributes['alt']).toEqual(
        component.propietarioDetail.nombre
      );
    });
  
    
    it('should have one dd tag for component.propietarioDetail.Celular', () => {
      const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
      const node = allDt.find((value) => {
        return value.nativeElement.textContent == 'Celular';
      });
      expect(node?.nativeElement.nextSibling.textContent).toContain(component.propietarioDetail.celular);
    });
   
    it('should have one dd tag for component.propietarioDetail.Correo', () => {
      const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
      const node = allDt.find((value) => {
        return value.nativeElement.textContent == 'Correo';
      });
      expect(node?.nativeElement.nextSibling.textContent).toContain(component.propietarioDetail.correo);
    });
   
  

  
  
});
