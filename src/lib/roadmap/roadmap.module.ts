import { NgModule } from '@angular/core';
import { RoadmapComponent } from './component/roadmap/roadmap.component';
import { ListComponent } from './component/list/list.component';
import { CardComponent } from './component/card/card.component';
import { VoteComponent } from './component/vote/vote.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { SvgIconDirective } from './directive/svg-icon.directive';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    SvgIconDirective,
    RoadmapComponent,
    ListComponent,
    CardComponent,
    VoteComponent,
    ButtonComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [RoadmapComponent],
})
export class RoadmapModule { }
