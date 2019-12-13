import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.page.html',
  styleUrls: ['./messanger.page.scss'],
})
export class MessangerPage implements OnInit {

  messages=[
    {
      uid:1,
      name:"Naruto Uzumaki",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      date:"11h14"
    },
    {
      uid:2,
      name:"Naruto Uzumaki",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.",
      date:"11h14"
    },
    {
      uid:1,
      name:"Naruto Uzumaki",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      date:"11h14"
    },
  ]

  constructor(private router: Router) { }

  goTomessagerie(){
    this.router.navigateByUrl('messagerie');
  }

  ngOnInit() {
  }

}
