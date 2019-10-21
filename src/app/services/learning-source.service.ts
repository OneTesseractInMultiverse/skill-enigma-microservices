import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LearningSource} from '../interfaces/learning-source';

@Injectable({
  providedIn: 'root'
})
export class LearningSourceService {

    // -------------------------------------------------------------------------------
    // SERVICE PROPERTIES
    // -------------------------------------------------------------------------------
    private URL = `${environment.api}/${environment.apiVersion}/knowledge_source`;

    // -------------------------------------------------------------------------------

    constructor(private http: HttpClient) {
    }

    // -------------------------------------------------------------------------------
    // GET -> RETURN A SPECIFIC EMPLOYEE DATA
    // -------------------------------------------------------------------------------
    getLearningSourceById(learningSourceId: string): Observable<LearningSource> {
        console.log(`${this.URL}/${learningSourceId}`);
        return this.http.get(`${this.URL}/${learningSourceId}`).pipe(
            map((res: LearningSource) => res)
        );
    } // GET END

    // -------------------------------------------------------------------------------
    // GET -> RETURN THE LIST OF ALL EMPLOYEES
    // -------------------------------------------------------------------------------
    /**
     * Gets the list of employees
     */
    getLearningSources(skip: number = 0, limit: number = 100): Observable<LearningSource[]> {
        console.log(`${this.URL}`);
        return this.http.get(`${this.URL}?skip=${skip}&limit=${limit}`).pipe(
            map((res: LearningSource[]) => res)
        );
    } // GET EMPLOYEES ENDS -----------------------------------------------------------
}
