import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigle-teacher-profil',
  templateUrl: './sigle-teacher-profil.page.html',
  styleUrls: ['./sigle-teacher-profil.page.scss'],
})
export class SigleTeacherProfilPage implements OnInit {

  slideOpts={};

  segment: string="apropos";

  notes=[
    {
      userId:1,
      message:" j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"      
    },
    {
      userId:2,
      message:" j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"      
    },
    {
      userId:3,
      message:" j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"      
    },
  ]

  constructor(private route: Router) { 
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

  goToMessage(){
    this.route.navigateByUrl('home/messagerie');
  }

  recrute(){
    this.route.navigateByUrl('home/price');
  }

}
