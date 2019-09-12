import { Component, OnInit, Output, Input,  EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {

  @Input() skill: object;
  @Input() buttonLabel: String;
  @Output() buttonClicked = new EventEmitter<object>();

  constructor(private fb: FormBuilder, private router: Router) { }

  skillForm: FormGroup;
  ngOnInit() {
    this.skillForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      skill_type: ['', Validators.required],
      is_high_demand: ['', Validators.required],
      shortage: ['', Validators.required]
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.skill){
      this.updateSkill(changes.skill,changes.skill.firstChange);
    }
  }

  onButtonClicked(event:object) {
    console.log(event);
    this.buttonClicked.emit(event);
  }

  updateSkill(skillChanges:object, isFirstChange:boolean){
    if(!isFirstChange){
      // TO DO: Look the way to define the object with the attributes before is updated
      const skillObj = skillChanges.currentValue;
      this.skillForm.patchValue({
        id:skillObj.id,
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
