import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabOne } from './tabOne.page';

describe('TabOne', () => {
  let component: TabOne;
  let fixture: ComponentFixture<TabOne>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabOne],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
