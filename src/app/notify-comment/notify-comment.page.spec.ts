import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifyCommentPage } from './notify-comment.page';

describe('NotifyCommentPage', () => {
  let component: NotifyCommentPage;
  let fixture: ComponentFixture<NotifyCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
