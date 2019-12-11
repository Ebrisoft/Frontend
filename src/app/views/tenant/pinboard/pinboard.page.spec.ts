import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PinboardPage } from "./pinboard.page";

describe("PinboardPage", () => {
  let component: PinboardPage;
  let fixture: ComponentFixture<PinboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
