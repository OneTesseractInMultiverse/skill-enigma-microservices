import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKnowledgesourcesComponent } from './create-knowledgesources.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: CreateKnowledgesourcesComponent

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CreateKnowledgesourcesRoutingModule { }
