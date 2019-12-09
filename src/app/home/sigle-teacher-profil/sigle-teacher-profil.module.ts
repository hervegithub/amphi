import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigleTeacherProfilPageRoutingModule } from './sigle-teacher-profil-routing.module';

import { SigleTeacherProfilPage } from './sigle-teacher-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigleTeacherProfilPageRoutingModule
  ],
  declarations: [SigleTeacherProfilPage]
})
export class SigleTeacherProfilPageModule {}
