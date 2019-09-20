import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {KnowledgesourceFormComponent} from '../../components/knowledgesource-form/knowledgesource-form.component'


@NgModule({
  declarations: [ KnowledgesourceFormComponent ],
  imports:[ 
      CommonModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule 
    ],
  exports:      [ KnowledgesourceFormComponent ]
 })
export class KnowledgesourceDeclarationModule { }
