import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { SkillService } from '../../services/skill.service';


@Component({
  selector: 'app-create-skills',
  templateUrl: './create-skills.component.html',
  styleUrls: ['./create-skills.component.scss']
})
export class CreateSkillsComponent implements OnInit {
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit() {
    
 
  }

  
  submit(skillsObj: object) {
    console.log('insert');
    console.log(skillsObj);
    return false;
    this.skillService.postSkill(skillsObj).subscribe(
      res => {
          alert('New Skill Inserted');
          this.router.navigate(['/skill-management/skills'])
      }, error => {
          // ERROR
          alert('Unable to insert new skill');
      });

  }

  update(skillsObj: object) {
    console.log('update');
    console.log(skillsObj);
    return false;
    this.skillService.postSkill(skillsObj).subscribe(
      res => {
          alert('New Skill Inserted');
          this.router.navigate(['/skill-management/skills'])
      }, error => {
          // ERROR
          alert('Unable to insert new skill');
      });

  }

test($event){
  console.log('dad');
  console.log($event);
}



  parseBool(val: object) {
    return JSON.parse(String(val).toLowerCase());
}

}
