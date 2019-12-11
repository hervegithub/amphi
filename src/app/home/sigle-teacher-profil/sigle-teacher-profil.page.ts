import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigle-teacher-profil',
  templateUrl: './sigle-teacher-profil.page.html',
  styleUrls: ['./sigle-teacher-profil.page.scss'],
})
export class SigleTeacherProfilPage implements OnInit {

  slideOpts={};

  

  Competences=[
    {
      id:1,
      titre:"Mathematiques",
      niveau:["3 ième", "2nd" , "Terminale"],
    },
    {
      id:1,
      titre:"Mathematiques",
      niveau:["3 ième", "2nd" , "Terminale"],
    },
    {
      id:1,
      titre:"Mathematiques",
      niveau:["3 ième", "2nd" , "Terminale"],
    }
  ]

  constructor() { 
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

  ngOnInit() {
  }

}
