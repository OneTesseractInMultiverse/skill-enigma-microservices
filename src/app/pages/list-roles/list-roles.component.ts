import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Role} from '../../interfaces/role';
import {RoleService} from '../../services/role.service';


export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

@Component({
    selector: 'app-list-roles',
    templateUrl: './list-roles.component.html',
    styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {

    id: string;
    name: string;
    description: string;
    area: string;
    unit: string;

    displayedColumns: string[] = [
        'name',
        'description',
        'area',
        'unit',
        'holders',
        'view',
        'edit'
    ];
    dataSource: MatTableDataSource<Role>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private roleService: RoleService) {
        const role: Role[] = []; // We start with an empty array of Skill
        this.dataSource = new MatTableDataSource(role);
    }

    ngOnInit() {
        this.loadRoles();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


    loadRoles(): void {
        // SERVICE ENDPOINT
        this.roleService.getRoles(0, 1000).subscribe(
            value => {
                // RETURN ROLES
                this.dataSource.data = value;
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to load Roles');
            });

    } // METHOD LOAD EMPLOYEES ENDS -----------------------------------------------------

    // tslint:disable-next-line:typedef
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (!this.dataSource.paginator) {
            return;
        }
        this.dataSource.paginator.firstPage();
    }

}
