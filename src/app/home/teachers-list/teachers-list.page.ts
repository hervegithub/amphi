import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.page.html',
  styleUrls: ['./teachers-list.page.scss'],
})
export class TeachersListPage implements OnInit {

  listes= [];
  slideOpts={};
  constructor(private router: Router) {
    this.listes = 
    [
      {
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      },
      {
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      },
      {
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      },{
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      },
      {
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      },
      {
        nom:"Mark Angel",
        ville:"Douala",
        niveau:"Master2",
        recommandation: 2,
        etoile:2,
      }
    ]

    this.slideOpts = {
      slidesPerView: 2.2,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    }
  }

  navigateToSigleTeacher(){
    this.router.navigateByUrl('sigle-teacher-profil');
  }

  ngOnInit() {
  }

}
