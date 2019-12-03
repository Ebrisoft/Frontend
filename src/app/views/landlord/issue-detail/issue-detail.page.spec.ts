import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IssueDetailPage } from "./issue-detail.page";

describe("IssueDetailPage", () => {
  let component: IssueDetailPage;
  let fixture: ComponentFixture<IssueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
