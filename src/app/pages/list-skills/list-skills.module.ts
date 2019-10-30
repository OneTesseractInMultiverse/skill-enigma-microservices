import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSkillsRoutingModule } from './list-skills-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ListSkillsComponent} from './list-skills.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
      ListSkillsComponent
  ],
  imports: [
    CommonModule,
    ListSkillsRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      NgxDatatableModule
  ]
})
export class ListSkillsModule { }
