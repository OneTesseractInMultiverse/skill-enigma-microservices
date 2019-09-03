import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Skill} from '../../interfaces/skill';
import {SkillService} from '../../services/skill.service';

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

    displayedColumns: string[] = [
        'title',
        'description',
        'skill_type',
        'is_high_demand',
        'shortage',
        'holders',
        'view',
        'edit'
    ];
    dataSource: MatTableDataSource<Skill>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private skillService: SkillService) {
        const skills: Skill[] = []; // We start with an empty array of Skill
        this.dataSource = new MatTableDataSource(skills);
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.loadSkills();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    // tslint:disable-next-line:typedef
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (!this.dataSource.paginator) {
            return;
        }
        this.dataSource.paginator.firstPage();
    }

    loadSkills(): void {
        // SERVICE ENDPOINT
        this.skillService.getSkills(0, 1000).subscribe(
            value => {
                // RETURN THE EMPLOYEE
                this.dataSource.data = value;
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to load skills');
            });
    } // METHOD LOAD EMPLOYEES ENDS -----------------------------------------------------

} // CLASS ENDS -------------------------------------------------------------------------
