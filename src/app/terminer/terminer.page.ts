import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminer',
  templateUrl: './terminer.page.html',
  styleUrls: ['./terminer.page.scss'],
})
export class TerminerPage implements OnInit {

  constructor(private router: Router) { }

  forwardStep(){
    this.router.navigateByUrl("register-step3");
  }

  nextStep(){
    this.router.navigateByUrl("login");
  }

  ngOnInit() {
  }

}
