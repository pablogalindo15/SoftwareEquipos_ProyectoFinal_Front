/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HabitanteListComponent } from './habitante-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitanteDetail } from '../habitante-detail';
import { Habitante } from '../habitante';
import { HabitanteService } from '../habitante.service';

describe('HabitanteListComponent', () => {
  let component: HabitanteListComponent;
  let fixture: ComponentFixture<HabitanteListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HabitanteListComponent ],
      providers: [HabitanteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitanteListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
