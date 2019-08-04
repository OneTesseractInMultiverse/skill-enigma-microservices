import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeProfileRoutingModule} from './employee-profile-routing.module';
import {EmployeeProfileComponent} from './employee-profile.component';
import {FuseSharedModule} from '../../../@fuse/shared.module';

@NgModule({
    declarations: [EmployeeProfileComponent],
    imports: [
        //  CORE MODULES
        CommonModule,
        //  ROUTING
        EmployeeProfileRoutingModule,
        //  FUSE MODULE
        FuseSharedModule
    ]
})
export class EmployeeProfileModule {
}
