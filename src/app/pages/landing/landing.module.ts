import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LandingComponent} from './landing.component';
import {FuseWidgetModule} from '../../../@fuse/components';
import {AnnouncementsComponent} from './announcements/announcements.component';
import {QuickPanelComponent} from './quick-panel/quick-panel.component';
import {ParticlesModule} from 'angular-particle';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        LandingComponent,
        AnnouncementsComponent,
        QuickPanelComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        ParticlesModule,
        //  FUSE MODULE
        FuseSharedModule,
        FuseWidgetModule,
        FontAwesomeModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        NgxChartsModule,
        NgxDatatableModule
    ]
})
export class LandingModule {
}
