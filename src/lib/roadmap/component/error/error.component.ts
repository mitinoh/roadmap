import { Component, Input } from '@angular/core';
import { SVG } from '../../enum/svg.enum';
@Component({
  selector: 'ion-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() message: string = '' 
  SVG = SVG;

}
