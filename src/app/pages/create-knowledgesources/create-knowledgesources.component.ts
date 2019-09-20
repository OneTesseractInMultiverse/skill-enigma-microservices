import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { KnowledgesourceService } from '../../services/knowledgesource.service';


@Component({
  selector: 'app-create-knowledgesources',
  templateUrl: './create-knowledgesources.component.html',
  styleUrls: ['./create-knowledgesources.component.scss']
})
export class CreateKnowledgesourcesComponent implements OnInit {
  constructor(private knowledgesourceService: KnowledgesourceService, private router: Router) { }
  buttonLabel: string = 'Submit';
  ngOnInit() {

  }

  react(knowledgesourceObj: object) {
    this.submit(knowledgesourceObj);
  }

  submit(knowledgesourcesObj: object) {
    this.knowledgesourceService.postKnowledgesource(knowledgesourcesObj).subscribe(
      res => {
        alert('New Knowledgesource Inserted');
        this.router.navigate(['/knowledgesource-management/knowledgesources'])
      }, error => {
        // ERROR
        alert('Unable to insert new knowledgesource');
      });

  }


  parseBool(val: object) {
    return JSON.parse(String(val).toLowerCase());
  }

}
