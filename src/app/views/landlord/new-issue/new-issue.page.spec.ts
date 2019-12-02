import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NewIssuePage } from "./new-issue.page";

describe("NewIssuePage", () => {
  let component: NewIssuePage;
  let fixture: ComponentFixture<NewIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIssuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
