import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataFilterService } from './DataFilter.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataFilterService', () => {
  let service: DataFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule], 
      providers: [service]
    });
    service = TestBed.inject(DataFilterService);
  });

  it('should be created', inject([DataFilterService], (service: DataFilterService) => {
    expect(service).toBeTruthy();
  }));
});
