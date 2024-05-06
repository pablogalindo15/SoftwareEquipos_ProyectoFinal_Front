import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { ComentarioDetailComponent } from './comentario-detail.component';
import { ComentarioDetail } from '../comentario-detail';
import { Propietario } from  '../../propietario/propietario';
import { Comentario } from '../comentario';

describe('ComentarioDetailComponent', () => {
  let component: ComentarioDetailComponent;
  let fixture: ComponentFixture<ComentarioDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ComentarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetailComponent);
    component = fixture.componentInstance;



    component.comentarioDetail = new ComentarioDetail(
      faker.datatype.number(),
      faker.internet.userName(),
      faker.datatype.string(),
      faker.datatype.number({min: 1, max: 5}),
      faker.datatype.string()
     
      

    

    
   
      
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with comentarioDetail.titulo', () => {
    const nameElement: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(nameElement.textContent).toContain(component.comentarioDetail.titulo);
  });

 


});