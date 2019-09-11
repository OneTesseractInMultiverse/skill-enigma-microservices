import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSkillsRoutingModule } from './update-skills-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {UpdateSkillsComponent} from './update-skills.component';
import {SkillDeclarationModule} from '../delarations/skill-declaration.module'


@NgModule({
  declarations: [
    UpdateSkillsComponent
  ],
  imports: [
    CommonModule,
    UpdateSkillsRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      SkillDeclarationModule
  ]
})
export class UpdateSkillsModule { }
