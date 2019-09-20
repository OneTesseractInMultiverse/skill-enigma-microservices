import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateKnowledgesourcesRoutingModule } from './create-knowledgesources-routing.module';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { MaterialModule } from '../../modules/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CreateKnowledgesourcesComponent } from './create-knowledgesources.component';
import { KnowledgesourceDeclarationModule } from '../declarations/knowledgesource-declaration.module'

@NgModule({
  declarations: [
    CreateKnowledgesourcesComponent
  ],
  imports: [
    CommonModule,
    CreateKnowledgesourcesRoutingModule,
    //  FUSE MODULE
    FuseSharedModule,
    // EXTERNAL LIBRARIES MODULE
    MaterialModule,
    NgxChartsModule,
    KnowledgesourceDeclarationModule
  ]
})
export class CreateKnowledgesourcesModule { }
