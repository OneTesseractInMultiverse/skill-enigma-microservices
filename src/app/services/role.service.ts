import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Role} from '../interfaces/role';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  // -------------------------------------------------------------------------------
    // SERVICE PROPERTIES
    // -------------------------------------------------------------------------------
    private URL = `${environment.api}/${environment.apiVersion}/role`;

    // -------------------------------------------------------------------------------

    constructor(private http: HttpClient) {
    }

       // -------------------------------------------------------------------------------
    // GET -> RETURN A SPECIFIC Role DATA
    // -------------------------------------------------------------------------------
    getRoleById(roleId: string): Observable<Role> {
      console.log(`${this.URL}/${roleId}`);
      return this.http.get(`${this.URL}/${roleId}`).pipe(
          map((res: Role) => res)
      );
  } // GET END


    // ------------------------------------------------------------------------------------
  // POST NEW role
  // ------------------------------------------------------------------------------------
  /**
   *
   * @param role
   */
  saveRole(role){
    return this.http.post(this.URL,role).pipe(
        map((res: Response) => {
          return res;
        } )
    );
  }
}
