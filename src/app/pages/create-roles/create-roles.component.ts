import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from 'app/services/role.service';

@Component({
    selector: 'app-create-roles',
    templateUrl: './create-roles.component.html',
    styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {

    buttonLabel = 'Submit';

    constructor(private roleService: RoleService, private router: Router) {
    }

    ngOnInit(): void{

    }

    react(roleObj: object): void {
        this.submit(roleObj);
    }


    submit(roleObj: object): void {
        this.roleService.saveRole(roleObj).subscribe(
            res => {
                alert('New Role Inserted');
                this.router.navigate(['/roles']);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to insert new Role');
            });


    }

    parseBool(val: object) {
        return JSON.parse(String(val).toLowerCase());
    }


}
