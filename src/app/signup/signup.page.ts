import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
submit: number=null
  constructor(public router:Router) { }
  Login(){
    this.router.navigate(['/login'])
  }



  ngOnInit() {
  }

}
