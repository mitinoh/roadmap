import { AfterViewInit, Component, HostBinding, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoadMap } from '../../interface/roadmap.interface';
import { LOAD } from '../../enum/load.enum';

@Component({
  selector: 'ion-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
})
export class RoadmapComponent implements AfterViewInit {
  @Input() url?: string;
  @HostBinding("style.--primary") primary: string = '#007effd9';
  @HostBinding("style.--primary-bg") primaryBg: string = '#007eff1f';
  roadmap?: RoadMap;
  empty?: boolean = true
  LOAD = LOAD
  loadingStatus: LOAD = LOAD.LOADING
  messageError: string = ''

  constructor(
    private httpClient: HttpClient
  ) { }

  ngAfterViewInit(): void {
    this.initRoadMap();
  }

  initRoadMap() {

    if (this.url)
      this.httpClient.get<RoadMap>(this.url).subscribe(
        (res) => {
          this.roadmap = new RoadMap(res, this.url!);
          this.roadmap.keys = this.roadmap.keys.sort((a, b) => b.up.value - a.up.value)
          this.empty = false

          if (this.roadmap.color) {
            this.primary = `${this.roadmap.color}d9`
            this.primaryBg = `${this.roadmap.color}1f`
          }
          this.loadingStatus = LOAD.LOADED
        },
        (error) => {
          this.loadingStatus = LOAD.ERROR
          console.error(error)
        }
      );
    else
      console.warn("Attention url not present")
  }
}