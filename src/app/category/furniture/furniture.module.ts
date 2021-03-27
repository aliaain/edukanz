import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FurniturePageRoutingModule } from './furniture-routing.module';

import { FurniturePage } from './furniture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FurniturePageRoutingModule
  ],
  declarations: [FurniturePage]
})
export class FurniturePageModule {}
