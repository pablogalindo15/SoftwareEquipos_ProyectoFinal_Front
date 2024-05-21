import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaComponentLugar } from './mapa-lugar.component';
import { HttpClientModule } from '@angular/common/http';

describe('MapaComponentLugar', () => {
  let component: MapaComponentLugar;
  let fixture: ComponentFixture<MapaComponentLugar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaComponentLugar],
      imports:[HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaComponentLugar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
