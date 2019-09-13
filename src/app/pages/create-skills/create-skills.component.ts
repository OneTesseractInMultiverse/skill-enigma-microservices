import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { SkillService } from '../../services/skill.service';


@Component({
  selector: 'app-create-skills',
  templateUrl: './create-skills.component.html',
  styleUrls: ['./create-skills.component.scss']
})
export class CreateSkillsComponent implements OnInit {
  constructor(private skillService: SkillService, private router: Router) { }
  buttonLabel: string = 'Submit';
  ngOnInit() {

  }

  react(skillObj: object) {
    this.submit(skillObj);
  }

  submit(skillsObj: object) {
    this.skillService.postSkill(skillsObj).subscribe(
      res => {
        alert('New Skill Inserted');
        this.router.navigate(['/skill-management/skills'])
      }, error => {
        // ERROR
        alert('Unable to insert new skill');
      });

  }


  parseBool(val: object) {
    return JSON.parse(String(val).toLowerCase());
  }

}
