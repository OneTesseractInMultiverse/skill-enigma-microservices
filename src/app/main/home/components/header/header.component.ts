import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() leftTitle: string;
    @Input() rightTitle: string;

    constructor() {
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
    }

}
