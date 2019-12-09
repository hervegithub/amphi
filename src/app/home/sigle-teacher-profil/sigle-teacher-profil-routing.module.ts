import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigleTeacherProfilPage } from './sigle-teacher-profil.page';

const routes: Routes = [
  {
    path: '',
    component: SigleTeacherProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigleTeacherProfilPageRoutingModule {}
