import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_services';

@Component({
    selector: 'app-callback',
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private authService: AuthenticationService, public router: Router) {
    }

    ngOnInit(): void {
        console.log('callback');
        this.activatedRoute.queryParams.subscribe(params => {
            const token = params['access_token'];
            this.authService.saveToken(token);
        });
    }
}
