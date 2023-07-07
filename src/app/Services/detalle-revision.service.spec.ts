import { TestBed } from '@angular/core/testing';

import { DetalleRevisionService } from './detalle-revision.service';

describe('DetalleRevisionService', () => {
  let service: DetalleRevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleRevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
