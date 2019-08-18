import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-contact-item',
    templateUrl: './contact-item.component.html',
    styleUrls: ['./contact-item.component.scss']
})

export class ContactItemComponent {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------
    // INPUTS
    @Input() icon: string;
    @Input() text: string;
    // -------------------------------------------------------------------------------

} // COMPONENT END
