import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaComponent } from './mapa.component';
import { HttpClientModule } from '@angular/common/http';

describe('MapaComponent', () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaComponent],
      imports:[HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
