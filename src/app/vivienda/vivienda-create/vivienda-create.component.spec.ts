import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaCreateComponent } from './vivienda-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('ViviendaCreateComponent', () => {
  let component: ViviendaCreateComponent;
  let fixture: ComponentFixture<ViviendaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,
                HttpClientModule,
                ReactiveFormsModule,
                ToastrModule.forRoot({
                  timeOut: 10000,
                  positionClass: 'toast-bottom-right',
                  preventDuplicates: true,
                }),
      ],
      declarations: [ViviendaCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViviendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
