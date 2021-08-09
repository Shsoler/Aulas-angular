import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAdicionarComponent } from './aluno-adicionar.component';

describe('AlunoAdicionarComponent', () => {
  let component: AlunoAdicionarComponent;
  let fixture: ComponentFixture<AlunoAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
