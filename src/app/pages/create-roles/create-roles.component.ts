import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RoleService } from 'app/services/role.service';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private roleService: RoleService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      area: ['', Validators.required],
      unit: ['', Validators.required]
  });
  }

  
  onSubmit(rolesObj) {
    this.roleService.saveRole(rolesObj).subscribe(
      res => {
          console.log(res);
          alert('New role Inserted');
      }, error => {
          // ERROR
          console.error(error);
          alert('Unable to insert new role');
      });

  }


}
