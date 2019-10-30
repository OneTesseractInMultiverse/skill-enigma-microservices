import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from 'app/services/role.service';

@Component({
    selector: 'app-create-roles',
    templateUrl: './create-roles.component.html',
    styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {
    buttonLabel: string = 'Submit';

    constructor(private roleService: RoleService, private router: Router) {
    }

    ngOnInit() {

    }

    react(roleObj: object) {
        this.submit(roleObj);
    }


    submit(roleObj: object) {
        this.roleService.saveRole(roleObj).subscribe(
            res => {
                alert('New Role Inserted');
                this.router.navigate(['/roles/list']);
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
