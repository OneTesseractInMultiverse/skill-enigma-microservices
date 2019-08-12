import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeProfileRoutingModule} from './employee-profile-routing.module';
import {EmployeeProfileComponent} from './employee-profile.component';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HeaderComponent} from './header/header.component';
import { SkillGrowthComponent } from './skill-growth/skill-growth.component';
import { SkillsPanelComponent } from './skills-panel/skills-panel.component';
import { SkillsAreaComponent } from './skills-panel/skills-area/skills-area.component';
import { SkillComponent } from './skills-panel/skills-area/skill/skill.component';
import { SkillComponentComponent } from './skills-panel/skills-area/skill/skill-component/skill-component.component';

@NgModule({
    declarations: [EmployeeProfileComponent, HeaderComponent, SkillGrowthComponent, SkillsPanelComponent, SkillsAreaComponent, SkillComponent, SkillComponentComponent],
    imports: [
        //  CORE MODULES
        CommonModule,
        //  ROUTING
        EmployeeProfileRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule
    ]
})
export class EmployeeProfileModule {
} // MODULE END
