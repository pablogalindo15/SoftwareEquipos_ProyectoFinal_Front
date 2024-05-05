import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LugarListComponent } from './lugar-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LugarService } from '../lugar.service';
import { faker } from '@faker-js/faker';
import { LugarDetail } from '../lugar-detail';

describe('LugarListComponent', () => {
  let component: LugarListComponent;
  let fixture: ComponentFixture<LugarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [LugarListComponent],
      providers: [LugarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarListComponent);
    component = fixture.componentInstance;
    
    //fixture.detectChanges();
  enum tipoLugar {
    Universidad,
    Restaurante,
    Supermercado,
    Parque,
    CentroComercial
  }
  for (let i = 0; i < 10; i++) {
    const lugar = new LugarDetail(

      faker.number.int(),
      faker.lorem.word(),
      faker.image.url(),
      faker.number.int(),
      faker.datatype.boolean(),
      faker.number.int(),
      faker.number.int(),
      faker.number.int(),
      faker.number.int(),
      tipoLugar.Restaurante 
    );
    component.lugares.push(lugar);
  }
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});