import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRolesComponent} from './create-roles.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: CreateRolesComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CreateRolesRoutingModule { }
