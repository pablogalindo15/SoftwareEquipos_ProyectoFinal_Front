import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LugarListComponent } from './lugar-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LugarService } from '../lugar.service';
import { faker } from '@faker-js/faker';
import { LugarDetail } from '../lugar-detail';

describe('LugarListComponent', () => {
  let component: LugarListComponent;
  let fixture: ComponentFixture<LugarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [LugarListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});

