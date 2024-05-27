import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentarioListComponent } from './comentario-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioService } from '../comentario.service';
import { faker } from '@faker-js/faker';
import { ComentarioDetail } from '../comentario-detail';
import {NgxPaginationModule} from 'ngx-pagination'; 

describe('ComentarioListComponent', () => {
  let component: ComentarioListComponent;
  let fixture: ComponentFixture<ComentarioListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,NgxPaginationModule],
      declarations: [ComentarioListComponent],
      providers: [ComentarioService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioListComponent);
    component = fixture.componentInstance;
    
    //fixture.detectChanges();
  
  for (let i = 0; i < 10; i++) {
    const comentario = new ComentarioDetail(

      faker.number.int(),
      faker.lorem.word(),
      faker.lorem.word(),
      faker.number.int(),
      faker.lorem.word(),
     
    );
    component.comentarios.push(comentario);
  }
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});