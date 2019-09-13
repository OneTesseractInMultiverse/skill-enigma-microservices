import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { SkillService } from 'app/services/skill.service';
import { Skill } from '../../interfaces/skill';


@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.scss']
})
export class UpdateSkillsComponent implements OnInit {
  constructor(private skillService: SkillService, private router: Router, private route: ActivatedRoute) { }

  SKILL: Skill = { id: '?', title: '?', description: '?', skill_type: '?', is_high_demand: false, shortage: false, badge_image_url: '?' };

  ngOnInit() {
    this.setSkill();
  }
  buttonLabel: string = 'Update';
  setSkill() {
    const skill_id: string = this.route.snapshot.paramMap.get('skill_id');
    // SERVICE ENDPOINT
    this.skillService.getSkillById(skill_id).subscribe(
      value => {
        // RETURN THE SKILL
        this.SKILL = value;
      }, error => {
        // ERROR
        console.error(error);
        alert('Unable to find skill');
      });
  }

  react(skillObj: object) {
    this.update(skillObj);
  }

  update(skillsObj: object) {
    const skill_id = this.SKILL.id;
    // @ts-ignore
    skillsObj.is_high_demand = this.parseBool(skillsObj.is_high_demand);
    // @ts-ignore
    skillsObj.shortage = this.parseBool(skillsObj.shortage);
    this.skillService.putSkill(skill_id, skillsObj).subscribe(
      res => {
        alert('Skill Updated');
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
