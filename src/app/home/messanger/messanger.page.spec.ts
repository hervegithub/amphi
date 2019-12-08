import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessangerPage } from './messanger.page';

describe('MessangerPage', () => {
  let component: MessangerPage;
  let fixture: ComponentFixture<MessangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessangerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
