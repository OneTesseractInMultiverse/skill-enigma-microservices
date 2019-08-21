import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRolesRoutingModule } from './list-roles-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ListRolesComponent} from './list-roles.component';


@NgModule({
  declarations: [
      ListRolesComponent
  ],
  imports: [
    CommonModule,
    ListRolesRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule
  ]
})
export class ListRolesModule { }
