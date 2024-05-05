/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { LugarService } from './lugar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Lugar', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [LugarService]
   });
 });

 it('should ...', inject([LugarService], (service: LugarService) => {
   expect(service).toBeTruthy();
 }));
});

