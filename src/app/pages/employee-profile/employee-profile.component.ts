import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../interfaces/employee';

@Component({
    selector: 'app-employee-profile',
    templateUrl: './employee-profile.component.html',
    styleUrls: ['./employee-profile.component.scss']
})

export class EmployeeProfileComponent implements OnInit {

    // -------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // -------------------------------------------------------------------------------
    EMPLOYEE: Employee = {position: '?', last_name: '?', name: '?', id: '?', email: '?', bio: '?'};

    // -------------------------------------------------------------------------------

    constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.setEmployee();
    }

    // -------------------------------------------------------------------------------
    // METHOD -> SEARCH AN SAVED EMPLOYEE AND RETURN IT
    // -------------------------------------------------------------------------------
    setEmployee(): void {
        // GET THE EMPLOYEE ID FROM URL
        const EMPLOYEE_ID: string = this.route.snapshot.paramMap.get('employee_id');

        // SERVICE ENDPOINT
        this.employeeService.getEmployeeById(EMPLOYEE_ID).subscribe(
            value => {
                // RETURN THE EMPLOYEE
                this.EMPLOYEE = value;
                console.log(value);
            }, error => {
                // ERROR
                console.error(error);
            });
    } // method END

} // COMPONENT ENDS
