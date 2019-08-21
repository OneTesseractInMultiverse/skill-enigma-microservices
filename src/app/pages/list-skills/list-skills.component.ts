import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.scss']
})
export class ListSkillsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

} // CLASS ENDS -------------------------------------------------------------------------
