import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,  public router: Router) { }

  ngOnInit(): void {
      this.authService.login();
  }

}
