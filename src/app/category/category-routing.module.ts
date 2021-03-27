import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPage } from './category.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  },
  {
    path: 'cloths',
    loadChildren: () => import('./cloths/cloths.module').then( m => m.ClothsPageModule)
  },
  {
    path: 'shoes',
    loadChildren: () => import('./shoes/shoes.module').then( m => m.ShoesPageModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./grocery/grocery.module').then( m => m.GroceryPageModule)
  },
  {
    path: 'glasses',
    loadChildren: () => import('./glasses/glasses.module').then( m => m.GlassesPageModule)
  },
  {
    path: 'furniture',
    loadChildren: () => import('./furniture/furniture.module').then( m => m.FurniturePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
