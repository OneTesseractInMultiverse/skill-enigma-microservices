import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------
    @Input() ID: string;
    @Input() NAME: string;
    @Input() LAST_NAME: string;
    @Input() POSITION: string;
    @Input() EMAIL: string;
    @Input() AVATAR: string;

    // -------------------------------------------------------------------------------

} // COMPONENT END
