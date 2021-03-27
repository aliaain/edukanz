import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.page.html',
  styleUrls: ['./furniture.page.scss'],
})
export class FurniturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    //categories: string[] = ['i','c']
    catPrice: object  = {'i':500,
                'c': 750
    }
    counter: number = 0
    totalPrice = 0
    calcCost (cat: string){
      this.counter++
      this.totalPrice += this.catPrice[cat]

    }


}
