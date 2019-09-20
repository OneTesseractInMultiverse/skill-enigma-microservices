import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListKnowledgesourcesRoutingModule} from './list-knowledgesources-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ListKnowledgesourcesComponent} from './list-knowledgesources.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
    declarations: [
        ListKnowledgesourcesComponent
    ],
    imports: [
        CommonModule,
        ListKnowledgesourcesRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule,
        NgxDatatableModule
    ]
})
export class ListKnowledgesourcesModule {
}
