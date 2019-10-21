import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ListLearnSourcesComponent} from './list-learn-sources.component';


const routes: Routes = [
    {
        path: '**',
        component: ListLearnSourcesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ListLearnSourcesRoutingModule {
}
