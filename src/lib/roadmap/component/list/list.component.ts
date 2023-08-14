import { Component, Input } from '@angular/core';
import { RoadMap } from '../../interface/roadmap.interface';

@Component({
  selector: 'ion-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() roadmap?: RoadMap;
}
