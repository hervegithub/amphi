import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor( private router : Router) {
   
  }

  backforward(){
    this.router.navigateByUrl('register');
  }

  nextStep(){
    this.router.navigateByUrl('register-step2')
  }
  


}
