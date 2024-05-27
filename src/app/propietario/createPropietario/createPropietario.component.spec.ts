/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { CreatePropietarioComponent } from './createPropietario.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('CreatePropietarioComponent', () => {
  let component: CreatePropietarioComponent;
  let fixture: ComponentFixture<CreatePropietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        }),

      ],
      declarations: [ CreatePropietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
