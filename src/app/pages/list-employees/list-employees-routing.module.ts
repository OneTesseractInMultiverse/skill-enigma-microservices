import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEmployeesComponent} from './list-employees.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: ListEmployeesComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListEmployeesRoutingModule { }
