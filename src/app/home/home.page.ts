import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVal: number = 0 // variable decaerlation assignment 
  myName: string='Hassan '
  constructor() {}
message(){
if (this.myVal <5){
  this.myVal ++}
}
nameRepeat(){
  //this.myName += this.myName

  this.myName = this.myName + "<br/> Hassan"

}



}

