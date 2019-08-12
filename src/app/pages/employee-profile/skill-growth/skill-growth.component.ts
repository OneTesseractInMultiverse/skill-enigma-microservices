import {Component} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';

@Component({
    selector: 'app-skill-growth',
    templateUrl: './skill-growth.component.html',
    styleUrls: ['./skill-growth.component.scss'],
    animations: fuseAnimations
})

export class SkillGrowthComponent {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showYAxisLabel = true;
    yAxisLabel = 'Skills';

    // LINE CHART DATA
    multi = [
        {
            name: 'Skills',
            series: [
                {name: 'February', value: 2},
                {name: 'March', value: 4},
                {name: 'April', value: 6},
                {name: 'May', value: 10},
                {name: 'June', value: 10},
                {name: 'July', value: 11}
            ]
        }
    ];

    // -------------------------------------------------------------------------------

} // COMPONENT END
