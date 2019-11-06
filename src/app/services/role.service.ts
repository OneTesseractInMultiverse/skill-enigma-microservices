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
    // GET -> RETURN THE LIST OF ALL SKILLS
    // -------------------------------------------------------------------------------
    /**
     *
     * @param skip
     * @param limit
     */
    getRoles(skip: number = 0, limit: number = 100): Observable<Role[]> {
      console.log(`${this.URL}`);
      return this.http.get(`${this.URL}?skip=${skip}&limit=${limit}`).pipe(
          map((res: Role[]) => res)
      );
  } // GET 
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
  // POST NEW learningSource
  // ------------------------------------------------------------------------------------
  /**
   *
   * @param role
   */
  saveRole(role:object){
    return this.http.post(this.URL, role).pipe(
        map((res: Response) => {
          return res;
        } )
    );
  }

   // -------------------------------------------------------------------------------
    // PUT -> UPDATE ROLE IN THE DB
    // -------------------------------------------------------------------------------
    /**
     *
     * @param role obj
     */
    putRole(role_id:string,role: object){
      return this.http.put(this.URL+'/'+role_id,role).pipe(
          map((res: Response) => {
              return res;
          } )
      );
  } // PUT Role ENDS -----------------------------------------------------------


  
}
