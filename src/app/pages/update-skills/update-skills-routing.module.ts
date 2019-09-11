import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateSkillsComponent} from './update-skills.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: UpdateSkillsComponent

    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UpdateSkillsRoutingModule { }
