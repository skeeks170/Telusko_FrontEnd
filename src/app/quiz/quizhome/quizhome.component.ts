import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent {

  constructor(private router:Router){}

  goToAdminQuiz(){
    this.router.navigate(['quiz/adminquiz'])    
  }

  goToUserQuiz(){
    this.router.navigate(['quiz/userquiz'])
  }

}
