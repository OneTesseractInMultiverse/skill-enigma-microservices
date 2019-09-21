import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledgesource-form',
  templateUrl: './knowledgesource-form.component.html',
  styleUrls: ['./knowledgesource-form.component.scss']
})
export class KnowledgesourceFormComponent implements OnInit {

  @Input() knowledgesource: object;
  @Input() buttonLabel: String;
  @Output() buttonClicked = new EventEmitter<object>();

  constructor(private fb: FormBuilder, private router: Router) { }

  knowledgesourceForm: FormGroup;
  ngOnInit() {
    this.knowledgesourceForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      knowledgesource_type: ['', Validators.required],
      is_high_demand: ['', Validators.required],
      shortage: ['', Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.knowledgesource) {
      this.updateKnowledgesource(changes.knowledgesource, changes.knowledgesource.firstChange);
    }
  }

  onButtonClicked(event: object) {
    this.buttonClicked.emit(event);
  }

  updateKnowledgesource(knowledgesourceChanges: object, isFirstChange: boolean) {
    if (!isFirstChange) {
      // TO DO: Look the way to define the object with the attributes before is updated
      // @ts-ignore
      const knowledgesourceObj = knowledgesourceChanges.currentValue;
      this.knowledgesourceForm.patchValue({
        id: knowledgesourceObj.id,
        title: knowledgesourceObj.title,
        description: knowledgesourceObj.description,
        knowledgesource_type: knowledgesourceObj.knowledgesource_type,
        is_high_demand: String(knowledgesourceObj.is_high_demand),
        shortage: String(knowledgesourceObj.shortage)
      });
    }
  }
  onBack() {
    this.router.navigate(['/knowledgesource-management/knowledgesource'])
  }
}
