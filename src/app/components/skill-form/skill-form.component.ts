import { Component, OnInit, Output, Input,  EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { SkillService } from 'app/services/skill.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {

  @Input() myFriend: string

  @Input() skill: object;
  @Output() test:any = new EventEmitter();
  @Output() submit:any = new EventEmitter<object>();

  
  constructor(private fb: FormBuilder, private skillService: SkillService, private router: Router, private route: ActivatedRoute) { }

  skillForm: FormGroup;
  ngOnInit() {
    this.skillForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      skill_type: ['', Validators.required],
      is_high_demand: ['', Validators.required],
      shortage: ['', Validators.required]
      });
  }
  onSubmit(objSkill:object){
    this.test.emit(objSkill);
  }
  onTest(){
    this.test.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.skill.firstChange){
      const skillObj = changes.skill.currentValue;
      this.skillForm.patchValue({
        title: skillObj.title,
        description: skillObj.description,
        skill_type: skillObj.skill_type,
        is_high_demand: String(skillObj.is_high_demand),
        shortage: String(skillObj.shortage)
      });
    }
  }

  onBack(){
    this.router.navigate(['/skill-management/skills'])
  }
}
