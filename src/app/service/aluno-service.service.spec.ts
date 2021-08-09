import { TestBed } from '@angular/core/testing';

import { AlunoServiceService } from './aluno-service.service';

describe('AlunoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoServiceService = TestBed.get(AlunoServiceService);
    expect(service).toBeTruthy();
  });
});
