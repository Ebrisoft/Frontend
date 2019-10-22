import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IssueFeed } from './issue-feed.page';

describe('TabOne', () => {
  let component: IssueFeed;
  let fixture: ComponentFixture<IssueFeed>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueFeed],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IssueFeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
