import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeProfileComponent} from './employee-profile.component';
import {FuseSharedModule} from '../../../@fuse/shared.module';

// ROUTES
const ROUTES: Routes = [
    {
        path: '**',
        component: EmployeeProfileComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        //  CORE MODULES
        CommonModule,
        //  INIT THE ROUTES
        RouterModule.forChild(ROUTES)
    ]
})

export class EmployeeProfileRoutingModule {
} // ROUTING MODULE ENDS
