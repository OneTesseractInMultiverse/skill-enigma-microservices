import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../interfaces/employee';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    // CLASS ATTRIBUTES -------------------------------------------------------
    jwtHelper = new JwtHelperService();
    isLogged = false;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private authUrl = `${environment.authorization_server}/${environment.application_id}/${environment.authorization_endpoint}`;

    // ------------------------------------------------------------------------
    // CONSTRUCTOR
    // ------------------------------------------------------------------------
    /**
     *
     * @param http
     * @param router
     * @param employeeService
     */
    constructor(
        private http: HttpClient,
        private router: Router,
        private employeeService: EmployeeService
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    // ------------------------------------------------------------------------
    // GET CURRENT USER
    // ------------------------------------------------------------------------
    /**
     *
     */
    public get getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    // ------------------------------------------------------------------------
    // LOGIN
    // ------------------------------------------------------------------------
    /**
     *
     */
    public login(): void {
        window.location.replace(this.authUrl);
    }

    logout(): void {
        localStorage.removeItem('rawToken');
        this.isLogged = false;
        this.router.navigate(['login-message']);
    }

    // ------------------------------------------------------------------------
    // IS AUTHENTICATED
    // ------------------------------------------------------------------------
    /**
     *
     */
    isAuthenticated(): boolean {
        this.isLogged = localStorage
            .getItem('rawToken') && !this.jwtHelper.isTokenExpired(localStorage.getItem('rawToken'));
        return this.isLogged;
    } // IS AUTHENTICATED ENDS ------------------------------------------------

    // ------------------------------------------------------------------------
    // GET USER
    // ------------------------------------------------------------------------
    /**
     *
     */
    getUser(): User {
        const user: User = Object();
        const decoded = this.jwtHelper.decodeToken(localStorage.getItem('rawToken'));
        user.identity = decoded.identity;
        user.user_claims = decoded.user_claims;
        return user;
    } // GET USER ENDS --------------------------------------------------------

    // ------------------------------------------------------------------------
    // METHOD MERGE STINGS
    // ------------------------------------------------------------------------
    /**
     *
     * @param parts
     * @param startPosition
     * @param endPosition
     * @param separator
     */
    private mergeStrings(
        parts: string[],
        startPosition: number,
        endPosition: number,
        separator: string
    ): string{
        let outputString = '';
        for (let i = startPosition; i < endPosition + 1; ++i) {
            if (i !== 0){
                outputString += separator + parts[i];
            } // IF ENDS
            else{
                outputString += parts[i];
            }
        } // FOR ENDS
        return outputString;
    } // METHOD MERGE STRING ENDS ---------------------------------------------


    // ------------------------------------------------------------------------
    // METHOD EXTRACT LAST NAME
    // ------------------------------------------------------------------------
    /**
     *
     * @param name
     */
    private extractLastName(name: string): string{
        let outLastName = '';
        const nameParts: string[] = name.split(' ');
        if (nameParts.length === 2){
            outLastName = nameParts[1];
        }
        else {
            console.log(nameParts);
            outLastName = this.mergeStrings(
                nameParts,
                nameParts.length - 2,
                nameParts.length - 1,
                ' '
            );
        } // IF ENDS
        return outLastName;
    } // METHOD EXTRACT NAME ENDS ---------------------------------------------

    /**
     *
     * @param name
     */
    private extractName(name: string): string{
        let outName = '';
        const nameParts: string[] = name.split(' ');
        if (nameParts.length === 2){
            outName = nameParts[0];
        }
        else {
            outName = this.mergeStrings(
                nameParts,
                0,
                nameParts.length - 3,
                ' '
            );
        } // IF ENDS
        return outName;
    }

    getUserEmployee(): any {
        const user = this.getUser();
        const fullName = user.user_claims.name;
        let payload =  {
            email: user.user_claims.email,
            id: user.identity.uid,
            name: this.extractName(fullName),
            last_name: this.extractLastName(fullName)
        };
        console.log(payload);
        return payload;
    }

    // ------------------------------------------------------------------------
    // SAVE TOKEN
    // ------------------------------------------------------------------------
    /**
     *
     * @param token
     */
    saveToken(token): void {
        if (!this.jwtHelper.isTokenExpired(token)){
            localStorage.setItem('rawToken', token);
            this.isLogged = true;
            console.log('//////////////////////////////////////');
            console.log(this.getUser());
            this.employeeService.saveEmployee(this.getUserEmployee()).subscribe(
                res => {
                    console.log('EMPLOYEE UPDATED --------------------------------- ');
                    console.log(res);
                }, error => {
                    // ERROR
                    console.log('Unable to update employee definition');
                    console.log(error);
                });
        }
        this.redirectAfterLogin();
    }

    // ------------------------------------------------------------------------
    // REDIRECT AFTER LOGIN
    // ------------------------------------------------------------------------
    /**
     *
     */
    redirectAfterLogin(): void {
        if (localStorage.getItem('afterLoginView') && localStorage.getItem('afterLoginView') !== '') {
            this.router.navigate([localStorage.getItem('afterLoginView')]);
        } else {
            this.router.navigate(['landing']);
        }
    }
} // AUTHENTICATION SERVICE ENDS ----------------------------------------------
