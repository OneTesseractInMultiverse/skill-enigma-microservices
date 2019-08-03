import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule, FuseWidgetModule} from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { HomeComponent } from './main/home/home.component';
import {MaterialModule} from './modules/material/material.module';
import { HeaderComponent } from './main/home/components/header/header.component';
import { ProjectStatusComponent } from './main/home/components/project-status/project-status.component';
import { HighlightsComponent } from './main/home/components/highlights/highlights.component';
import { LowlightsComponent } from './main/home/components/lowlights/lowlights.component';
import { TmsComponent } from './main/home/components/tms/tms.component';
import { HelpNeededComponent } from './main/home/components/help-needed/help-needed.component';
import { ManagementItemTableComponent } from './main/home/components/management-item-table/management-item-table.component';

const appRoutes: Routes = [
    { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProjectStatusComponent,
        HighlightsComponent,
        LowlightsComponent,
        TmsComponent,
        HelpNeededComponent,
        ManagementItemTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material

        MaterialModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        FuseWidgetModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
