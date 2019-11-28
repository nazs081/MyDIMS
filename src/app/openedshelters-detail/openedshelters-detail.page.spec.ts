import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenedsheltersDetailPage } from './openedshelters-detail.page';

describe('OpenedsheltersDetailPage', () => {
  let component: OpenedsheltersDetailPage;
  let fixture: ComponentFixture<OpenedsheltersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedsheltersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenedsheltersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
