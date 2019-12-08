import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.page.html',
  styleUrls: ['./register-step3.page.scss'],
})
export class RegisterStep3Page implements OnInit {

  constructor(private router: Router) { }

  forwardStep(){
    this.router.navigateByUrl('register-step2');
  }

  nextStep(){
    this.router.navigateByUrl('terminer');
  }

  ngOnInit() {
  }

}
