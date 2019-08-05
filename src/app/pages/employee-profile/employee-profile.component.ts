import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../@fuse/animations';

@Component({
    selector: 'app-employee-profile',
    templateUrl: './employee-profile.component.html',
    styleUrls: ['./employee-profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EmployeeProfileComponent implements OnInit {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Months';
    showYAxisLabel = true;
    yAxisLabel = 'Skills';


    multi = [
        {
            "name": "Skills",
            "series": [
                {
                    "name": "February",
                    "value": 2
                },
                {
                    "name": "March",
                    "value": 4
                },
                {
                    "name": "April",
                    "value": 6
                },
                {
                    "name": "May",
                    "value": 10
                },
                {
                    "name": "June",
                    "value": 10
                },
                {
                    "name": "July",
                    "value": 11
                }
            ]
        }
    ];


    constructor() {
    }

    ngOnInit() {
    }

} // COMPONENT ENDS
