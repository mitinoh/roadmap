import { Component, Input } from '@angular/core';
import { Key } from '../../interface/key.interface';
import { RoadMap } from '../../interface/roadmap.interface';
import { HttpClient } from '@angular/common/http';
import { SVG } from '../../enum/svg.enum';

@Component({
  selector: 'ion-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() down: boolean = false;
  @Input({ required: true }) key!: Key;
  @Input({ required: true }) roadmap!: RoadMap;
  SVG = SVG

  constructor(private httpCLient: HttpClient) { }

  get class(): string {
    return `button ${this.classType} ${this.classVoted}`
  }
  get classType(): string {
    return this.down ? 'down' : 'up';
  }

  get classVoted(): string {
    return (this.down && this.key.down.voted) || (!this.down && this.key.up.voted) ? "voted" : ''
  }

  get classRotate(): string {
    return this.down ? 'rotate' : '';
  }

  onVote() {
    if (this.down) this.key.downVote()
    else this.key.upVote()
    this.httpCLient.post(this.roadmap.url, JSON.stringify(this.roadmap)).subscribe()
  }
}
