import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifyDetailPage } from './notify-detail.page';

describe('NotifyDetailPage', () => {
  let component: NotifyDetailPage;
  let fixture: ComponentFixture<NotifyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
