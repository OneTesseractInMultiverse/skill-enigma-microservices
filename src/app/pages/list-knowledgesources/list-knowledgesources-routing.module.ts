import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListKnowledgesourcesComponent} from './list-knowledgesources.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: ListKnowledgesourcesComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListKnowledgesourcesRoutingModule { }
