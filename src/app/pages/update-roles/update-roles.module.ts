import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRolesRoutingModule } from './update-roles-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {UpdateRolesComponent} from './update-roles.component';
import {RoleDeclarationModule} from '../declarations/role-declaration.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UpdateRolesComponent
  ],
  imports: [
    CommonModule,
    UpdateRolesRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      RoleDeclarationModule
  ]
})
export class UpdateRolesModule { }
