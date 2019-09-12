import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSkillsComponent } from './create-skills.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: CreateSkillsComponent

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CreateSkillsRoutingModule { }
