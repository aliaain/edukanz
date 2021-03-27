import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothsPageRoutingModule } from './cloths-routing.module';

import { ClothsPage } from './cloths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothsPageRoutingModule
  ],
  declarations: [ClothsPage]
})
export class ClothsPageModule {}
