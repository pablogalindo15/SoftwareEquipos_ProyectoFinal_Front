import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LugarDetailComponent } from './lugar-detail.component';
import { faker } from '@faker-js/faker'; 
import { LugarDetail,TipoLugar } from '../lugar-detail';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LugarService } from '../lugar.service';


describe('LugarDetailComponent', () => {
  let component: LugarDetailComponent;
  let fixture: ComponentFixture<LugarDetailComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LugarDetailComponent],
      imports:[HttpClientModule, RouterTestingModule,
        ReactiveFormsModule,]
        ,providers: [LugarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarDetailComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    const lugarDetail = new LugarDetail(
      faker.datatype.number(), // id
      faker.address.streetName(), // nombre
      faker.image.imageUrl(), // fotos
      faker.datatype.number(), // tiempoLLegada
      faker.datatype.boolean(), // gratis
      faker.datatype.number({ min: 10, max: 100 }), // precioMin
      faker.datatype.number({ min: 100, max: 1000 }), // precioMax
      faker.datatype.number(), // coordenadaX
      faker.datatype.number(), // coordenadaY
      TipoLugar.Restaurante // tipoLugar
    );

    component.lugarDetail = lugarDetail;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with lugarDetail.nombre', () => {
    const nameElement: HTMLElement = debugElement.query(By.css('p.h3.p-3')).nativeElement;
    expect(nameElement.textContent).toContain(component.lugarDetail.nombre);
  });

  it('should have an image element with correct src and alt attributes', () => {
    const imageElement = debugElement.query(By.css('img')).nativeElement;
    expect(imageElement.src).toContain(component.lugarDetail.fotos);
    expect(imageElement.alt).toContain(component.lugarDetail.nombre);
  });
});
