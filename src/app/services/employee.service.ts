import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Employee} from '../interfaces/employee';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    // -------------------------------------------------------------------------------
    // SERVICE PROPERTIES
    // -------------------------------------------------------------------------------
    private URL = `${environment.api}/${environment.apiVersion}/employee`;

    // -------------------------------------------------------------------------------

    constructor(private http: HttpClient) {
    }

    // -------------------------------------------------------------------------------
    // GET -> RETURN A SPECIFIC EMPLOYEE DATA
    // -------------------------------------------------------------------------------
    getEmployeeById(employeeId: string): Observable<Employee> {
        console.log(`${this.URL}/${employeeId}`);
        return this.http.get(`${this.URL}/${employeeId}`).pipe(
            map((res: Employee) => res)
        );
    } // GET END

    // -------------------------------------------------------------------------------
    // GET -> RETURN THE LIST OF ALL EMPLOYEES
    // -------------------------------------------------------------------------------
    /**
     * Gets the list of employees
     */
    getEmployees(skip: number = 0, limit: number = 100): Observable<Employee[]> {
        console.log(`${this.URL}`);
        return this.http.get(`${this.URL}?skip=${skip}&limit=${limit}`).pipe(
            map((res: Employee[]) => res)
        );
    } // GET EMPLOYEES ENDS -----------------------------------------------------------

    // -------------------------------------------------------------------------------
    // POSTS AN EMPLOYEE DEFINITION
    // -------------------------------------------------------------------------------
    /**
     * Gets the list of employees
     */
    saveEmployee(employee: Employee){
        return this.http.post(this.URL, employee).pipe(
            map((res: Employee) => res)
        );
    }

} // SERVICES END
