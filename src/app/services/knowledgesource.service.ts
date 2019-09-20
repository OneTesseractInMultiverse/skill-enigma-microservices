import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Knowledgesource} from '../interfaces/knowledgesource';

@Injectable({
    providedIn: 'root'
})
export class KnowledgesourceService {

    // -------------------------------------------------------------------------------
    // SERVICE PROPERTIES
    // -------------------------------------------------------------------------------
    private URL = `${environment.api}/${environment.apiVersion}/Knowledgesource`;

    /**
     *
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    // -------------------------------------------------------------------------------
    // GET -> RETURN A SPECIFIC Knowledgesource DATA
    // -------------------------------------------------------------------------------
    /**
     *
     * @param knowledgesourceId
     */
    getKnowledgesourceById(knowledgesourceId: string): Observable<Knowledgesource> {
        console.log(`${this.URL}/${knowledgesourceId}`);
        return this.http.get(`${this.URL}/${knowledgesourceId}`).pipe(
            map((res: Knowledgesource) => res)
        );
    } // GET END

    // -------------------------------------------------------------------------------
    // GET -> RETURN THE LIST OF ALL KnowledgesourceS
    // -------------------------------------------------------------------------------
    /**
     *
     * @param skip
     * @param limit
     */
    getKnowledgesources(skip: number = 0, limit: number = 100): Observable<Knowledgesource[]> {
        console.log(`${this.URL}`);
        return this.http.get(`${this.URL}?skip=${skip}&limit=${limit}`).pipe(
            map((res: Knowledgesource[]) => res)
        );
    } // GET EMPLOYEES ENDS -----------------------------------------------------------

     // -------------------------------------------------------------------------------
    // POST -> POST NEW Knowledgesource IN THE DB
    // -------------------------------------------------------------------------------
    /**
     *
     * @param knowledgesources obj
     */
    postKnowledgesource(knowledgesource: object){
        console.log(knowledgesource);
        return this.http.post(this.URL,knowledgesource).pipe(
            map((res: Response) => {
              return res;
            } )
        );
      } // POST Knowledgesource ENDS -----------------------------------------------------------

    // -------------------------------------------------------------------------------
    // PUT -> UPDATE Knowledgesource IN THE DB
    // -------------------------------------------------------------------------------
    /**
     *
     * @param knowledgesources obj
     */
    putKnowledgesource(knowledgesource_id:string,knowledgesource: object){
        return this.http.put(this.URL+'/'+knowledgesource_id,knowledgesource).pipe(
            map((res: Response) => {
                return res;
            } )
        );
    } // POST Knowledgesource ENDS -----------------------------------------------------------


} // CLASS LIST Knowledgesource COMPONENT -------------------------------------------------------
