import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ViviendaListComponent } from './vivienda-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Propietario } from '../../propietario/propietario';
import { ViviendaDetail } from '../vivienda-detail';

describe('ViviendaListComponent', () => {
  let component: ViviendaListComponent;
  let fixture: ComponentFixture<ViviendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ViviendaListComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaListComponent);
    component = fixture.componentInstance;

    // const propietario = new Propietario(
    //   faker.number.int(),
    //   faker.image.url(),
    //   faker.lorem.sentence(),
    //   faker.number.int(),
    //   faker.lorem.sentence()
    // )

    // for(let i=0;i<10;i++){
    //   const vivienda = new ViviendaDetail(
    //     faker.number.int(),
    //     faker.lorem.sentence(),
    //     faker.number.float(),
    //     faker.lorem.sentence(),
    //     faker.image.url(),
    //     faker.number.int(),
    //     faker.random.number({min:0, max:6}),
    //     faker.lorem.sentence(),
    //     faker.random.number({min:0, max:3}),
    //     faker.lorem.sentence(),
    //     faker.lorem.sentence(),
    //     faker.random.boolean(),
    //     faker.number.int(),
    //     faker.number.int(),
    //     propietario,
    //     [],
    //     [],
    //     []
    //   )
    // }

    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
