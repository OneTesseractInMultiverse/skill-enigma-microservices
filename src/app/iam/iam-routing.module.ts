import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './_components/login/login.component';
import {LogoutComponent} from './_components/logout/logout.component';
import {CallbackComponent} from './_components/callback/callback.component';
import {LoginMessageComponent} from './_components/login-message/login-message.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'login-message', component: LoginMessageComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'authorize', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IamRoutingModule { }
