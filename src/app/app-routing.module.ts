import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';

// ROUTES
const APP_ROUTES: Routes = [
    {
        path: 'employee-profile/:employee_id',
        loadChildren: () => import('./pages/employee-profile/employee-profile.module').then(mod => mod.EmployeeProfileModule)
    },
    {
        path: 'skill-management/employees',
        loadChildren: () => import('./pages/list-employees/list-employees.module').then(mod => mod.ListEmployeesModule)
    },
    {
        path: 'skill-management/skills',
        loadChildren: () => import('./pages/list-skills/list-skills.module').then(mod => mod.ListSkillsModule)
    },
    {
        path: 'roles-management/roles',
        loadChildren: () => import('./pages/list-roles/list-roles.module').then(mod => mod.ListRolesModule)
    },
    {
        path: 'roles-management/create',
        loadChildren: () => import('./pages/create-roles/create-roles.module').then(mod => mod.CreateRolesModule)
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        //  CORE MODULE
        CommonModule,
        // INIT THE ROUTES
        RouterModule.forRoot(APP_ROUTES),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
} // ROUTING MODULE ENDS
