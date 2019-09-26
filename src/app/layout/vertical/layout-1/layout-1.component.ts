import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import {AuthenticationService} from '../../../iam/_services';
import {Router} from '@angular/router';
import {User} from '../../../iam/_models';

@Component({
    selector     : 'vertical-layout-1',
    templateUrl  : './layout-1.component.html',
    styleUrls    : ['./layout-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;
    public user: User;
    public isAuthenticated: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param authService
     * @param router
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private authService: AuthenticationService,
        private router: Router
    )
    {
        // Set the defaults
        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        router.events.subscribe((value => {
            console.log(value);
            this.isAuthenticated = this.authService.isAuthenticated();
            if (this.isAuthenticated){
                this.user = this.authService.getUser();
            }
        }));

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
