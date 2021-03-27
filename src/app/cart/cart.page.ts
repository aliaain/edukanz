import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

myItem: number = 0
bread: number =0
egg: number=0
  constructor() { }
  breads(){
this.bread= 50
this.myItem=this.myItem+this.bread
     
  }
  eggs(){
    this.egg= 120
    this.myItem=this.myItem+this.egg
  }

  ngOnInit() {
  }

}
