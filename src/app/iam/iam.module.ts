import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IamRoutingModule} from './iam-routing.module';
import {FuseSharedModule} from '../../@fuse/shared.module';
import {MaterialModule} from '../modules/material/material.module';
import { CallbackComponent } from './_components/callback/callback.component';
import { LogoutComponent } from './_components/logout/logout.component';
import { LoginComponent } from './_components/login/login.component';
import { LoginMessageComponent } from './_components/login-message/login-message.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        CallbackComponent,
        LogoutComponent,
        LoginComponent,
        LoginMessageComponent
    ],
    imports: [
        CommonModule,
        IamRoutingModule,
        //  FUSE MODULE
        FuseSharedModule,
        // EXTERNAL LIBRARIES MODULE
        MaterialModule,
        BrowserAnimationsModule
    ],
    exports: [
        FuseSharedModule
    ]
})
export class IamModule {
}
