import { Component, OnInit } from '@angular/core';
import {ManagementItem} from '../../types/interfaces';

@Component({
  selector: 'app-lowlights',
  templateUrl: './lowlights.component.html',
  styleUrls: ['./lowlights.component.scss']
})
export class LowlightsComponent implements OnInit {

    items: ManagementItem[] = [
        {
            title: 'Sample Lowlight',
            comment: 'This is just a sample item ZZZ',
            eta: 'n/a',
            status: 'R',
            owner: 'Some IBMer'
        },
        {
            title: 'Sample Lowlight 2',
            comment: 'This is just a sample item ZZZ',
            eta: 'n/a',
            status: 'R',
            owner: 'Some IBMer'
        },
        {
            title: 'Sample Lowlight 3',
            comment: 'This is just a sample item ZZZ ',
            eta: 'n/a',
            status: 'R',
            owner: 'Some IBMer'
        }
    ];

    columns: string[] = [
        'title', 'owner', 'comment', 'eta', 'status'
    ];

  constructor() { }

  ngOnInit() {
  }

}
