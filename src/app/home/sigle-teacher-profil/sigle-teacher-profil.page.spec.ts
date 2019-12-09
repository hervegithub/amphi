import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigleTeacherProfilPage } from './sigle-teacher-profil.page';

describe('SigleTeacherProfilPage', () => {
  let component: SigleTeacherProfilPage;
  let fixture: ComponentFixture<SigleTeacherProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigleTeacherProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigleTeacherProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
