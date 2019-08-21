import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListEmployeesRoutingModule} from './list-employees-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ListEmployeesComponent} from './list-employees.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
    declarations: [
        ListEmployeesComponent
    ],
    imports: [
        CommonModule,
        ListEmployeesRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule,
        NgxDatatableModule
    ]
})
export class ListEmployeesModule {
}
