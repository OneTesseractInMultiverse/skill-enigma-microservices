import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRolesComponent} from './list-roles.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: ListRolesComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListRolesRoutingModule { }
