import { Component, OnInit } from '@angular/core';
import {ManagementItem} from '../../types/interfaces';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

    items: ManagementItem[] = [
        {
            title: 'Sample Item',
            comment: 'This is just a sample item ',
            eta: 'n/a',
            status: 'R',
            owner: 'Some IBMer'
        },
        {
            title: 'Sample Item 2',
            comment: 'This is just a sample item ',
            eta: 'n/a',
            status: 'Y',
            owner: 'Some IBMer'
        },
        {
            title: 'Sample Item 3',
            comment: 'This is just a sample item ',
            eta: 'n/a',
            status: 'G',
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
