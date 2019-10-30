import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ListLearnSourcesComponent} from './list-learn-sources.component';
import {ListLearnSourcesRoutingModule} from './list-learn-sources-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
      ListLearnSourcesComponent
  ],
  imports: [
    CommonModule,
      FuseSharedModule,
      ListLearnSourcesRoutingModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      NgxDatatableModule
  ]
})
export class ListLearnSourcesModule { }
