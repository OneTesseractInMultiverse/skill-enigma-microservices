import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LandingComponent} from './landing.component';


@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule,
        NgxDatatableModule
    ]
})
export class LandingModule {
}
