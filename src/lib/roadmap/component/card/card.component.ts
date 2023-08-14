import { Component, Input } from '@angular/core';
import { Key } from '../../interface/key.interface';
import { RoadMap } from '../../interface/roadmap.interface';

@Component({
  selector: 'ion-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input({ required: true }) roadmap!: RoadMap;
  @Input({ required: true }) key!: Key;
  @Input() downvote?: boolean = false;
}
