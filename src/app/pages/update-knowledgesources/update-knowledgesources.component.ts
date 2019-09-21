import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { KnowledgesourceService } from 'app/services/knowledgesource.service';
import { Knowledgesource } from '../../interfaces/knowledgesource';


@Component({
  selector: 'app-update-knowledgesources',
  templateUrl: './update-knowledgesources.component.html',
  styleUrls: ['./update-knowledgesources.component.scss']
})
export class UpdateKnowledgesourcesComponent implements OnInit {
  constructor(private knowledgesourceService: KnowledgesourceService, private router: Router, private route: ActivatedRoute) { }

  KNOWLEDGESOURCE: Knowledgesource = { id: '?', type_name: '?', description: '?', difficulty: '?', resource_url: '?'};

  ngOnInit() {
    this.setKnowledgesource();
  }
  buttonLabel: string = 'Update';
  setKnowledgesource() {
    const knowledgesource_id: string = this.route.snapshot.paramMap.get('knowledgesource_id');
    // SERVICE ENDPOINT
    this.knowledgesourceService.getKnowledgesourceById(knowledgesource_id).subscribe(
      value => {
        // RETURN THE KNOWLEDGESOURCE
        this.KNOWLEDGESOURCE = value;
      }, error => {
        // ERROR
        console.error(error);
        alert('Unable to find knowledgesource');
      });
  }

  react(knowledgesourceObj: object) {
    this.update(knowledgesourceObj);
  }

  update(knowledgesourcesObj: object) {
    const knowledgesource_id = this.KNOWLEDGESOURCE.id;
    // @ts-ignore
    knowledgesourcesObj.is_high_demand = this.parseBool(knowledgesourcesObj.is_high_demand);
    // @ts-ignore
    knowledgesourcesObj.shortage = this.parseBool(knowledgesourcesObj.shortage);
    this.knowledgesourceService.putKnowledgesource(knowledgesource_id, knowledgesourcesObj).subscribe(
      res => {
        alert('Knowledgesource Updated');
        this.router.navigate(['/knowledgesource-management/knowledgesource'])
      }, error => {
        // ERROR
        alert('Unable to insert new knowledgesource');
      });

  }

  parseBool(val: object) {
    return JSON.parse(String(val).toLowerCase());
  }

}
