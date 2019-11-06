import {Component, OnInit, Output, Input, EventEmitter, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

    @Input() role: object;
    @Input() buttonLabel: string;
    @Output() buttonClicked = new EventEmitter<object>();

    constructor(private fb: FormBuilder, private router: Router) {
    }

    roleForm: FormGroup;

    ngOnInit() {
        this.roleForm = this.fb.group({
            name: ['', Validators.required],
            area: ['', Validators.required],
            unit: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.role) {
            this.updateRole(changes.role, changes.role.firstChange);
        }
    }

    onButtonClicked(event: object) {
        this.buttonClicked.emit(event);
    }

    updateRole(roleChanges: object, isFirstChange: boolean) {
        if (!isFirstChange) {
            // TO DO: Look the way to define the object with the attributes before is updated
            // @ts-ignore
            const roleObj = roleChanges.currentValue;
            this.roleForm.patchValue({
                id: roleObj.id,
                name: roleObj.name,
                unit: roleObj.unit,
                area: roleObj.area,
                description: roleObj.description
            });
        }
    }

    onBack() {
        this.router.navigate(['/roles']);
    }
}
