import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViviendaService } from './vivienda.service';

describe('Service: Vivienda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViviendaService]
    });
  });
 
  it('should ...', inject([ViviendaService], (service: ViviendaService) => {
    expect(service).toBeTruthy();
  }));
});
