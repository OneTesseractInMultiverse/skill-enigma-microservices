import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateKnowledgesourcesRoutingModule } from './update-knowledgesources-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {UpdateKnowledgesourcesComponent} from './update-knowledgesources.component';
import {KnowledgesourceDeclarationModule} from '../declarations/knowledgesource-declaration.module'


@NgModule({
  declarations: [
    UpdateKnowledgesourcesComponent
  ],
  imports: [
    CommonModule,
    UpdateKnowledgesourcesRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      KnowledgesourceDeclarationModule
  ]
})
export class UpdateKnowledgesourcesModule { }
