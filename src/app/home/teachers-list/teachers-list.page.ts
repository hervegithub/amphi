import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.page.html',
  styleUrls: ['./teachers-list.page.scss'],
})
export class TeachersListPage implements OnInit {

  listes= [];
  constructor() {
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
      }
    ]
   }

  ngOnInit() {
  }

}
