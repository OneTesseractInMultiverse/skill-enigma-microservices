import {Component, Input, OnInit} from '@angular/core';
import {ManagementItem} from '../../types/interfaces';
import {MatTableDataSource} from '@angular/material';
import {log} from 'util';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'app-management-item-table',
    templateUrl: './management-item-table.component.html',
    styleUrls: ['./management-item-table.component.scss']
})
export class ManagementItemTableComponent implements OnInit {

    @Input() title: string;
    @Input() items: any[];
    @Input() displayedColumns: string[];

    dataSource: MatTableDataSource<any>;

    constructor() {

    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {
        console.log(this.items);
        console.log(this.displayedColumns);
        this.dataSource = new MatTableDataSource(this.items);
    }

    sayCrap(): void {
        alert('Crap!');
    }

}
