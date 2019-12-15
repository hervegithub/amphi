import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'teachers-list',
        children :[
          {
            path:"",
            loadChildren: () => import('./teachers-list/teachers-list.module').then( m => m.TeachersListPageModule)
          }
        ]
      },
      {
        path: 'messanger',
        children :[
          {
            path:"",
            loadChildren: () => import('./messanger/messanger.module').then( m => m.MessangerPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children :[
          {
            path:"",
            loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'parametres',
        children :[
          {
            path:"",
            loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
          }
        ]
      },
      {
        path: 'single-profil',
        children :[
          {
            path:"",
            loadChildren: () => import('./sigle-teacher-profil/sigle-teacher-profil.module').then( m => m.SigleTeacherProfilPageModule)
          }
        ]
      },
      {
        path: 'messagerie',
        children :[
          {
            path:"",
            loadChildren: () => import('./messagerie/messagerie.module').then( m => m.MessageriePageModule)
          }
        ]
      },
      {
        path: 'price',
        children :[
          {
            path:"",
            loadChildren: () => import('./prices/prices.module').then( m => m.PricesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/teachers-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/teachers/teachers-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
