import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-biography',
    templateUrl: './biography.component.html',
    styleUrls: ['./biography.component.scss']
})

export class BiographyComponent {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------
    @Input() BIOGRAPHY: string;

    // -------------------------------------------------------------------------------

} // COMPONENT ENDS
