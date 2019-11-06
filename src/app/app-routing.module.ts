import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './iam/_guards/auth.guard';

// ROUTES
const APP_ROUTES: Routes = [
    {
        path: 'employee/:employee_id',
        loadChildren: () => import('./pages/employee-profile/employee-profile.module').then(mod => mod.EmployeeProfileModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'employees',
        loadChildren: () => import('./pages/list-employees/list-employees.module').then(mod => mod.ListEmployeesModule),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'skill-management',
    //     loadChildren: () => import('./pages/skill-dashboard/skill-dashboard.module').then(mod => mod.SkillDashboardModule),
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'knowledge-source/list',
        loadChildren: () => import('./pages/list-learn-sources/list-learn-sources.module').then(mod => mod.ListLearnSourcesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-source/create',
        loadChildren: () => import('./pages/create-learn-sources/create-learn-sources.module').then(mod => mod.CreateLearnSourcesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'skills',
        loadChildren: () => import('./pages/list-skills/list-skills.module').then(mod => mod.ListSkillsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'skill/create',
        pathMatch: 'full',
        loadChildren: () => import('./pages/create-skills/create-skills.module').then(mod => mod.CreateSkillsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'skill/update/:skill_id',
        loadChildren: () => import('./pages/update-skills/update-skills.module').then(mod => mod.UpdateSkillsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'roles',
        pathMatch: 'full',
        loadChildren: () => import('./pages/list-roles/list-roles.module').then(mod => mod.ListRolesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'roles/create',
        pathMatch: 'full',
        loadChildren: () => import('./pages/create-roles/create-roles.module').then(mod => mod.CreateRolesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'roles/update/:role_id',
        pathMatch: 'full',
        loadChildren: () => import('./pages/update-roles/update-roles.module').then(mod => mod.UpdateRolesModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        loadChildren: () => import('./pages/landing/landing.module').then(mod => mod.LandingModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [],
    imports: [
        //  CORE MODULE
        CommonModule,
        // INIT THE ROUTES
        RouterModule.forRoot(APP_ROUTES, {useHash: true}),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
} // ROUTING MODULE ENDS
