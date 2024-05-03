import { TestBed, async, inject } from '@angular/core/testing';

import { HabitanteService } from './habitante.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Habitante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HabitanteService]
    });
  });
 
  it('should ...', inject([HabitanteService], (service: HabitanteService) => {
    expect(service).toBeTruthy();
  }));
});
