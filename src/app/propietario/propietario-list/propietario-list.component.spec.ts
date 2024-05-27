import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PropietarioListComponent } from './propietario-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PropietarioDetail } from '../propietario-detail';
import { faker } from '@faker-js/faker';
import { ToastrModule } from 'ngx-toastr';

describe('PropietarioListComponent', () => {
  let component: PropietarioListComponent;
  let fixture: ComponentFixture<PropietarioListComponent>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        }),

      ],
      declarations: [PropietarioListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioListComponent);
    component = fixture.componentInstance;
 
  for(let i = 0; i < 10; i++) {
    const propietario = new PropietarioDetail(
      faker.number.int(),
      faker.image.url(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      []
    );
    component.propietarios.push(propietario);
  }
    });
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
