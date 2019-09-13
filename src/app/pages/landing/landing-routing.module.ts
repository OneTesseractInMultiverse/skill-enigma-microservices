import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: LandingComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
