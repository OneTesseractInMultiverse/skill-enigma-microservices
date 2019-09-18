import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SkillFormComponent} from '../../components/skill-form/skill-form.component'


@NgModule({
  declarations: [ SkillFormComponent ],
  imports:[ 
      CommonModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule 
    ],
  exports:      [ SkillFormComponent ]
 })
export class SkillDeclarationModule { }
