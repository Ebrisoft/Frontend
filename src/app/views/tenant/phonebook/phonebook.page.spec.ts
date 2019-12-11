import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PhonebookPage } from "./phonebook.page";

describe("PhonebookPage", () => {
  let component: PhonebookPage;
  let fixture: ComponentFixture<PhonebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
