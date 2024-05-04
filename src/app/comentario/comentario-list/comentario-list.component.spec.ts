import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioListComponent } from './comentario-list.component';

describe('LugarListComponent', () => {
  let component: ComentarioListComponent;
  let fixture: ComponentFixture<ComentarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComentarioListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
