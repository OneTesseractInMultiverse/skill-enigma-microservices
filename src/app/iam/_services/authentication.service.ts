import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

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
     */
    constructor(private http: HttpClient, private router: Router) {
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

        console.log(decoded);  // TODO Remove this
        user.identity = decoded.identity;
        user.user_claims = decoded.user_claims;
        return user;
    } // GET USER ENDS --------------------------------------------------------

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
