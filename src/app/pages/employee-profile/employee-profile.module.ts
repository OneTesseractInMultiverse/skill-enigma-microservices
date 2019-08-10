import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeProfileRoutingModule} from './employee-profile-routing.module';
import {EmployeeProfileComponent} from './employee-profile.component';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FuseWidgetModule} from '../../../@fuse/components';

@NgModule({
    declarations: [EmployeeProfileComponent],
    imports: [
        //  CORE MODULES
        CommonModule,
        //  ROUTING
        EmployeeProfileRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        FuseWidgetModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule
    ]
})
export class EmployeeProfileModule {
}
