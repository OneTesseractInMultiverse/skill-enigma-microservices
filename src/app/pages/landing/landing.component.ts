import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../@fuse/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LandingComponent implements OnInit {

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

  constructor() { }

  ngOnInit(): void {
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

      this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'edge',
                  size: '6px',
                  stroke: {
                      width: 0,
                      color: '#000000'
                  }
              },
              line_linked: {
                  enabled: true,
                  distance: 150,
                  color: '#000',
                  opacity: 1,
                  width: 1
              }
          }
      };
  }

}
