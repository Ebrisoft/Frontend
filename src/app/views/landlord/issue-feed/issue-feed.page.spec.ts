import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { IssueFeedPage } from "./issue-feed.page";

describe("TabOne", () => {
  let component: IssueFeedPage;
  let fixture: ComponentFixture<IssueFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueFeedPage ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(IssueFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
