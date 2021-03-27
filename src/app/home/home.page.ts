import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import {CartService} from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      {this.itemsNcosts = "Shoes(" + this.shoescounter + ") = " + ((this.shoescounter*500)*0.95)
        //this.cartbill = ((this.shoescounter*500)*0.95)
    }

      if(s == 0 && c!=0)
      this.itemsNcosts = "Clothes(" + this.clothescounter + ") = " + (this.clothescounter*1200)

        if (s!=0 && c!=0)
        this.itemsNcosts = "Shoes(" + this.shoescounter + ") = " + (this.shoescounter*500) + " | Clothes(" + this.clothescounter + ") = " + (this.clothescounter*1200) 
  }
  
  constructor(public router:Router,) {
    //cartbill = this.serv.totalBILL
   }


  redriectcart(){
  this.router.navigate(['/cart']) 

 
  
}


redriectcloths(){
  this.router.navigate(['/category/cloths'])
}

redriectshoes(){
  this.router.navigate(['/category/shoes'])
}

redriectglasses(){
  this.router.navigate(['/category/glasses'])
}

redriectfurniture(){
  this.router.navigate(['/category/furniture'])
}
redriectgrocery(){
  this.router.navigate(['/category/grocery'])
}
}