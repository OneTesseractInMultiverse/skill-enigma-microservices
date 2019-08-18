import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
    public getEmployeeById(employeeId: string): Observable<Response> {
        return this.http.get(`${this.URL}/${employeeId}`).pipe(
            map((res: Response) => res)
        );
    } // GET END

} // SERVICES END
