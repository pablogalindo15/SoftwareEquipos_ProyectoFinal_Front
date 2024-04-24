import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViviendaListComponent } from './vivienda-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('ViviendaListComponent', () => {
  let component: ViviendaListComponent;
  let fixture: ComponentFixture<ViviendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ViviendaListComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
