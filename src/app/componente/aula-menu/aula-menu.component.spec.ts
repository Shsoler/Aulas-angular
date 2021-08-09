import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaMenuComponent } from './aula-menu.component';

describe('AulaMenuComponent', () => {
  let component: AulaMenuComponent;
  let fixture: ComponentFixture<AulaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
