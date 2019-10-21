import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Employee} from '../../interfaces/employee';
import {EmployeeService} from '../../services/employee.service';
import {LearningSource} from '../../interfaces/learning-source';
import {LearningSourceService} from '../../services/learning-source.service';

@Component({
  selector: 'app-list-learn-sources',
  templateUrl: './list-learn-sources.component.html',
  styleUrls: ['./list-learn-sources.component.scss']
})
export class ListLearnSourcesComponent implements OnInit {

    displayedColumns: string[] = ['id', 'type_name', 'description', 'difficulty', 'resource_url'];
    dataSource: MatTableDataSource<LearningSource>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // ----------------------------------------------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------------------------------------------
    /**
     *
     * @param learningSourceService
     */
    constructor(private learningSourceService: LearningSourceService) {
        const sources: LearningSource[] = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(sources);
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.loadLearningSources();
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

    loadLearningSources(): void {
        // SERVICE ENDPOINT
        this.learningSourceService.getLearningSources(0, 1000).subscribe(
            value => {
                // RETURN THE EMPLOYEE
                this.dataSource.data = value;
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to load Knowledge Sources');
            });
    } // METHOD LOAD EMPLOYEES ENDS -----------------------------------------------------

}
