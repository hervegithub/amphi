import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
})
export class MessageriePage implements OnInit {

  messages=
  [
    {
      userId:1,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      time:"11h15"
    },
    {
      userId:2,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      time:"11h15"
    },
    {
      userId:1,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      time:"11h15"
    },
  ]

  message:string;

  constructor() { }

  sendMessage(){
    this.messages.push(
      {
        userId: 1,
        message: this.message,
        time:"12h20"
      }
    );
    this.message="";
  }

  ngOnInit() {
  }

}
