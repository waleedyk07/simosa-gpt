import { TestBed } from '@angular/core/testing';

import { IvanGptClientService } from './ivan-gpt-client.service';

describe('IvanGptClientService', () => {
  let service: IvanGptClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvanGptClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
