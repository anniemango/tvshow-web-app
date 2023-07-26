import { Component } from '@angular/core';
import { ITVShow } from '../itvshow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css'],
})
export class TvShowResultComponent {
  current: Array<ITVShow>;
  constructor(private tvshowService: TvshowService) {
    this.current = [];
    this.tvshowService
      .getShows('girls')
      .subscribe(data => this.current = data);
  }
}
