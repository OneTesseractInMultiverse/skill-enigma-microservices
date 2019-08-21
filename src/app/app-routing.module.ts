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
