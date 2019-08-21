import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Employee} from '../../interfaces/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'last_name', 'email', 'position'];
    dataSource: MatTableDataSource<Employee>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // ----------------------------------------------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------------------------------------------
    /**
     *
     * @param employeeService
     */
    constructor(private employeeService: EmployeeService) {
        const employees: Employee[] = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(employees);
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.loadEmployees();
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

    loadEmployees(): void {
        // SERVICE ENDPOINT
        this.employeeService.getEmployees(0, 1000).subscribe(
            value => {
                // RETURN THE EMPLOYEE
                this.dataSource = new MatTableDataSource(value);
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to load employees');
            });
    } // METHOD LOAD EMPLOYEES ENDS -----------------------------------------------------

} // CLASS ENDS -------------------------------------------------------------------------

