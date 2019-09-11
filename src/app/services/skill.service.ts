import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Skill} from '../interfaces/skill';

@Injectable({
    providedIn: 'root'
})
export class SkillService {

    // -------------------------------------------------------------------------------
    // SERVICE PROPERTIES
    // -------------------------------------------------------------------------------
    private URL = `${environment.api}/${environment.apiVersion}/skill`;

    /**
     *
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    // -------------------------------------------------------------------------------
    // GET -> RETURN A SPECIFIC SKILL DATA
    // -------------------------------------------------------------------------------
    /**
     *
     * @param skillId
     */
    getSkillById(skillId: string): Observable<Skill> {
        console.log(`${this.URL}/${skillId}`);
        return this.http.get(`${this.URL}/${skillId}`).pipe(
            map((res: Skill) => res)
        );
    } // GET END

    // -------------------------------------------------------------------------------
    // GET -> RETURN THE LIST OF ALL SKILLS
    // -------------------------------------------------------------------------------
    /**
     *
     * @param skip
     * @param limit
     */
    getSkills(skip: number = 0, limit: number = 100): Observable<Skill[]> {
        console.log(`${this.URL}`);
        return this.http.get(`${this.URL}?skip=${skip}&limit=${limit}`).pipe(
            map((res: Skill[]) => res)
        );
    } // GET EMPLOYEES ENDS -----------------------------------------------------------

     // -------------------------------------------------------------------------------
    // POST -> POST NEW SKILL IN THE DB
    // -------------------------------------------------------------------------------
    /**
     *
     * @param skills obj
     */
    postSkill(skill: object){
        console.log(skill);
        console.log('jx');
        return this.http.post(this.URL,skill).pipe(
            map((res: Response) => {
              return res;
            } )
        );
      } // POST Skill ENDS -----------------------------------------------------------



} // CLASS LIST SKILL COMPONENT -------------------------------------------------------
