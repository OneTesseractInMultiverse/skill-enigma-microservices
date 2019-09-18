import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {RoleFormComponent} from '../../components/role-form/role-form.component'


@NgModule({
  declarations: [ RoleFormComponent ],
  imports:[ 
      CommonModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule 
    ],
  exports:      [ RoleFormComponent ]
 })
export class RoleDeclarationModule { }
