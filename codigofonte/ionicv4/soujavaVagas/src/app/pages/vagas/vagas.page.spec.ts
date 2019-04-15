import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasPage } from './vagas.page';

describe('VagasPage', () => {
  let component: VagasPage;
  let fixture: ComponentFixture<VagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
