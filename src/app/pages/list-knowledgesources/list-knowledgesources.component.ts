import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Knowledgesource} from '../../interfaces/knowledgesource';
import {KnowledgesourceService} from '../../services/knowledgesource.service';


@Component({
  selector: 'app-list-knowledgesources',
  templateUrl: './list-knowledgesources.component.html',
  styleUrls: ['./list-knowledgesources.component.scss']
})

export class ListKnowledgesourcesComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'last_name', 'email', 'position', 'view'];
    dataSource: MatTableDataSource<Knowledgesource>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // ----------------------------------------------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------------------------------------------
    /**
     *
     * @param knowledgesourceService
     */
    constructor(private knowledgesourceService: KnowledgesourceService) {
        const knowledgesources: Knowledgesource[] = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(knowledgesources);
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.loadKnowledgesources();
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

    loadKnowledgesources(): void {
        // SERVICE ENDPOINT
        this.knowledgesourceService.getKnowledgesources(0, 1000).subscribe(
            value => {
                // RETURN THE Knowledgesources
                this.dataSource.data = value;
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to load knowledgesources');
            });
    } // METHOD LOAD Knowledgesources ENDS -----------------------------------------------------

} // CLASS ENDS -------------------------------------------------------------------------

