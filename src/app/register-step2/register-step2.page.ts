import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step2',
  templateUrl: './register-step2.page.html',
  styleUrls: ['./register-step2.page.scss'],
})
export class RegisterStep2Page  {

  diplomes=[]

  constructor(private router: Router) { 
    this.diplomes=[
      'Baccalaureat',
      'Licence',
      'Master 1',
      'Master 2',
      'Professeur',
      'Maitre'
    ]
  }

  forwardStep(){
    this.router.navigateByUrl('register');
  }

  nextStep(){
    this.router.navigateByUrl('register-step3');
  }



}
