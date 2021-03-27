import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage
{
/*

 cart: number = 0 // variable decaerlation assignment -- total amount
 count: number = 0
 count2:number = 0
  constructor() {}


  addition(){
    if (this.cart >=0){
      this.cart ++}
    }
  shoes(){

    if(this.cart >=0){
      this.cart ++
    }
  }

  add2(){
    if(this.count>=0){
      this.count++
    }


  }
  add3(){
    if(this.count2>=0){
      this.count2 ++
    }
    

  }
  */

  itemsNcosts: string = ""
  total: number = 0 //value should add here
  clothescounter: number = 0
  shoescounter: number = 0

  addClothes(){ //ZERO ARG Function
    this.clothescounter++
    //if(this.clothescounter == 0)
    //this.itemsNcosts += "Clothes(" + this.clothescounter + ") = " + (this.clothescounter*1200) // string and number concatenation and price calculation within single line
    //else 
    this.cartstring(this.clothescounter, this.shoescounter) // FUNCTION CALL
    
  }
  addshoes(){
    this.shoescounter++
    //this.itemsNcosts = "Shoes(" + this.shoescounter + ") = " + (this.shoescounter*500) // string and number concatenation and price calculation within single line
    this.cartstring(this.clothescounter, this.shoescounter)
  }
  cartstring(c, s) // TWO ARG FUNCTION
  {
    if(c == 0 && s!=0)
      this.itemsNcosts = "Shoes(" + this.shoescounter + ") = " + (this.shoescounter*500)

      if(s == 0 && c!=0)
      this.itemsNcosts = "Clothes(" + this.clothescounter + ") = " + (this.clothescounter*1200)

        if (s!=0 && c!=0)
        this.itemsNcosts = "Shoes(" + this.shoescounter + ") = " + (this.shoescounter*500) + " | Clothes(" + this.clothescounter + ") = " + (this.clothescounter*1200) 
  }


}
