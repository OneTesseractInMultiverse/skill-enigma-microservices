import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"
import { SkillService } from 'app/services/skill.service';
import {Skill} from '../../interfaces/skill';


@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.scss']
})
export class UpdateSkillsComponent implements OnInit {
  constructor(private skillService: SkillService, private router: Router, private route: ActivatedRoute) { }

  SKILL: Skill = {id: '?', title: '?', description: '?', skill_type: '?', is_high_demand: false, shortage: false, badge_image_url:'?'};

  ngOnInit() {
    
    this.setSkill();


  }

setSkill(){
  const skill_id: string = this.route.snapshot.paramMap.get('skill_id');

   // SERVICE ENDPOINT
   this.skillService.getSkillById(skill_id).subscribe(
    value => {
        // RETURN THE EMPLOYEE
        this.SKILL = value;
        console.log(value);
    }, error => {
        // ERROR
        console.error(error);
        alert('Unable to find skill');
    });

}


  submitTest(skillsObj: object) {
    console.log('dad');
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
