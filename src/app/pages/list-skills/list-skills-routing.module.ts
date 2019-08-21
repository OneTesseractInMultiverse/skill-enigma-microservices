import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSkillsComponent} from './list-skills.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: ListSkillsComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListSkillsRoutingModule { }
