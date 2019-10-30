import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-learning-source-form',
  templateUrl: './learning-source-form.component.html',
  styleUrls: ['./learning-source-form.component.scss']
})
export class LearningSourceFormComponent implements OnInit {

    @Input() learningSource: object;
    @Input() buttonLabel: string;
    @Output() buttonClicked = new EventEmitter<object>();

    constructor(private fb: FormBuilder, private router: Router) {
    }

    learningSourceForm: FormGroup;

    ngOnInit() {
        this.learningSourceForm = this.fb.group({
            type_name: ['', Validators.required],
            description: ['', Validators.required],
            difficulty: ['', Validators.required],
            resource_url: ['', Validators.required]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.role) {
            this.updateLearningSource(changes.role, changes.role.firstChange);
        }
    }

    onButtonClicked(event: object) {
        this.buttonClicked.emit(event);
    }

    updateLearningSource(roleChanges: object, isFirstChange: boolean) {
        if (!isFirstChange) {
            // TO DO: Look the way to define the object with the attributes before is updated
            // @ts-ignore
            const learningSourceObj = roleChanges.currentValue;
            this.learningSourceForm.patchValue({
                id: learningSourceObj.id,
                type_name: learningSourceObj.type_name,
                description: learningSourceObj.description,
                difficulty: learningSourceObj.difficulty,
                resource_url: learningSourceObj.resource_url
            });
        }
    }

    onBack() {
        this.router.navigate(['/learning-source/list']);
    }

}
