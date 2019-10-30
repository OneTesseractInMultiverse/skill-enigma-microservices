import {Component, OnInit} from '@angular/core';
import {LearningSourceService} from '../../services/learning-source.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-learn-sources',
    templateUrl: './create-learn-sources.component.html',
    styleUrls: ['./create-learn-sources.component.scss']
})
export class CreateLearnSourcesComponent implements OnInit {

    buttonLabel: string = 'Submit';

    constructor(private learningSourceService: LearningSourceService, private router: Router) {

    }

    ngOnInit() {
    }

    // tslint:disable-next-line:typedef
    react(learningSourceObj: object) {
        this.submit(learningSourceObj);
    }

    // tslint:disable-next-line:typedef
    submit(learningSource: object) {
        this.learningSourceService.saveLearningSource(learningSource).subscribe(
            res => {
                alert('New Learning Source Inserted');
                this.router.navigate(['/learning-source/list']);
            }, error => {
                // ERROR
                console.error(error);
                alert('Unable to insert new Learning Source');
            });


    }

    parseBool(val: object) {
        return JSON.parse(String(val).toLowerCase());
    }

}
