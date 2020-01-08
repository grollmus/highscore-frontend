import { TestBed } from '@angular/core/testing';

import { ArchiveService } from './archive.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArchiveService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ArchiveService = TestBed.get(ArchiveService);
    expect(service).toBeTruthy();
  });
});
