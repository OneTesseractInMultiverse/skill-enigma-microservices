import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSkillsRoutingModule } from './create-skills-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CreateSkillsComponent} from './create-skills.component';
import {SkillDeclarationModule} from '../delarations/skill-declaration.module'

@NgModule({
  declarations: [
    CreateSkillsComponent
  ],
  imports: [
    CommonModule,
    CreateSkillsRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      SkillDeclarationModule
  ]
})
export class CreateSkillsModule { }
