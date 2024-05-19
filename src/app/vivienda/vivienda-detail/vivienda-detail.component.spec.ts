import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { ViviendaDetailComponent } from './vivienda-detail.component';
import { ViviendaDetail, tipoVivienda, posiblesEstratos } from '../vivienda-detail';
import { Propietario } from  '../../propietario/propietario';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ViviendaService } from '../vivienda.service';

describe('ViviendaDetailComponent', () => {
  let component: ViviendaDetailComponent;
  let fixture: ComponentFixture<ViviendaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        }),
      ],
      declarations: [ ViviendaDetailComponent ],
      providers: [ViviendaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaDetailComponent);
    component = fixture.componentInstance;

    const propietario = new Propietario(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.name.fullName(),
      faker.datatype.number(),
      faker.internet.email()
    );

    component.viviendaDetail = new ViviendaDetail(
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
      [],
      [],
      []
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with viviendaDetail.nombre', () => {
    const nameElement: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(nameElement.textContent).toContain(component.viviendaDetail.nombre);
  });

  it('should have an image element with correct src and alt attributes', () => {
    const imageElement = debug.query(By.css('img')).nativeElement;
    expect(imageElement.src).toContain(component.viviendaDetail.fotos);
    expect(imageElement.alt).toContain(component.viviendaDetail.nombre);
  });


});