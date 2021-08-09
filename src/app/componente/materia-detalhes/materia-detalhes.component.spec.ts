import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDetalhesComponent } from './materia-detalhes.component';

describe('MateriaDetalhesComponent', () => {
  let component: MateriaDetalhesComponent;
  let fixture: ComponentFixture<MateriaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
