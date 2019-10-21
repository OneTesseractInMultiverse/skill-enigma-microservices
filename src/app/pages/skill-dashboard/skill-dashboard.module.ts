import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillDashboardRoutingModule } from './skill-dashboard-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SkillDashboardComponent} from './skill-dashboard.component';


@NgModule({
  declarations: [
      SkillDashboardComponent
  ],
  imports: [
    CommonModule,
    SkillDashboardRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      NgxDatatableModule
  ]
})
export class SkillDashboardModule { }
