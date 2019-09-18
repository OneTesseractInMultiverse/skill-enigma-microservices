import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { RoleService } from 'app/services/role.service';
import { Role } from '../../interfaces/role';


@Component({
  selector: 'app-update-roles',
  templateUrl: './update-roles.component.html',
  styleUrls: ['./update-roles.component.scss']
})
export class UpdateRolesComponent implements OnInit {
  constructor(private roleService: RoleService, private router: Router, private route: ActivatedRoute) { }

  ROLE: Role = { id: '?', name: '?', description: '?', unit: '?', area: '?' };

  ngOnInit() {
    this.setRole();
  }
  buttonLabel: string = 'Update';
  setRole() {
    const role_id: string = this.route.snapshot.paramMap.get('role_id');
    // SERVICE ENDPOINT
    this.roleService.getRoleById(role_id).subscribe(
      value => {
        // RETURN THE SKILL
        this.ROLE = value;
      }, error => {
        // ERROR
        console.error(error);
        alert('Unable to find skill');
      });
  }

  react(skillObj: object) {
    this.update(skillObj);
  }

  update(roleObj: object) {
    const role_id = this.ROLE.id;
    this.roleService.putRole(role_id, roleObj).subscribe(
      res => {
        alert('Role Updated');
        this.router.navigate(['/roles-management/roles'])
      }, error => {
        // ERROR
        alert('Unable to Update Role');
      });

  }

  parseBool(val: object) {
    return JSON.parse(String(val).toLowerCase());
  }

}
