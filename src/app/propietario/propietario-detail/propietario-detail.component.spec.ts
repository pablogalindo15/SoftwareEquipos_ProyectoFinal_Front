import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioDetailComponent } from './propietario-detail.component';
import { Vivienda } from '../../vivienda/vivienda';
import { faker } from '@faker-js/faker';
import { posiblesEstratos, tipoVivienda } from '../../vivienda/vivienda-detail';
import { Propietario } from '../propietario';
import { PropietarioDetail } from '../propietario-detail';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('PropietarioDetailComponent', () => {
  let component: PropietarioDetailComponent;
  let fixture: ComponentFixture<PropietarioDetailComponent>;
  let debug: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropietarioDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropietarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const propietario = new Propietario(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.name.fullName(),
      faker.datatype.number(),
      faker.internet.email()
    ); 
     const viviendas: Vivienda[] = [];
     for (let i = 0; i < 3; i++) {
      const vivienda = new Vivienda (
      faker.datatype.number(),
      faker.commerce.productName(),
      faker.datatype.number({min: 1000, max: 100000}),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.datatype.number({min: 20, max: 1000}),
      posiblesEstratos.cinco,
      faker.lorem.sentence(),
      tipoVivienda.apartamentoComp,
      faker.phone.number(),
      faker.address.streetAddress(),
      faker.datatype.boolean(),
      faker.datatype.float(),
      faker.datatype.float(),
      propietario,
      );
      viviendas.push(vivienda);
    }
  
  
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
  
    it('should have 4 <dd> elements', () => {
      expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(4)
    });
    it('should have one dd tag for component.propietarioDetail.celular', () => {
      const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
      const node = allDt.find((value) => {
        return value.nativeElement.textContent == 'celular';
      });
      expect(node?.nativeElement.nextSibling.textContent).toContain(component.propietarioDetail.celular);
    });
   
    it('should have one dd tag for component.propietarioDetail.correo', () => {
      const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
      const node = allDt.find((value) => {
        return value.nativeElement.textContent == 'correo';
      });
      expect(node?.nativeElement.nextSibling.textContent).toContain(component.propietarioDetail.correo);
    });
   
  });

  
  
});
