import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateRolesComponent } from './update-roles.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '**',
        component: UpdateRolesComponent

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UpdateRolesRoutingModule { }
