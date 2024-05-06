import { async , ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';


import { HabitanteDetailComponent } from './habitante-detail.component';
import { Habitante } from '../habitante';
import { HabitanteDetail } from '../habitante-detail';


describe('HabitanteDetailComponent', () => {
  let component: HabitanteDetailComponent;
  let fixture: ComponentFixture<HabitanteDetailComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [HabitanteDetailComponent]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitanteDetailComponent);
    component = fixture.componentInstance;

 
      
    component.habitanteDetail = new HabitanteDetail (
      faker.datatype.number(),
      faker.name.fullName(),
      faker.datatype.string(),
    );

    fixture.detectChanges();
    debug = fixture.debugElement;

  
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
