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
    public getEmployeeById(employeeId: string): Observable<Employee> {
        return this.http.get(`${this.URL}/${employeeId}`).pipe(
            map((res: Employee) => res)
        );
    } // GET END

} // SERVICES END
