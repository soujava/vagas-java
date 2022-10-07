import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";

import { VagasPage } from "./vagas.page";

describe("VagasPage", () => {
  let component: VagasPage;
  let fixture: ComponentFixture<VagasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [VagasPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
