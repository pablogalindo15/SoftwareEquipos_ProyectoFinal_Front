import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ViviendaListComponent } from './vivienda-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Propietario } from '../../propietario/propietario';
import { ViviendaDetail } from '../vivienda-detail';
import { MapaComponent } from '../mapa/mapa.component';

describe('ViviendaListComponent', () => {
  let component: ViviendaListComponent;
  let fixture: ComponentFixture<ViviendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ViviendaListComponent, MapaComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
