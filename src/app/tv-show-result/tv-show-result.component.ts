import { Component, Input } from '@angular/core';
import { ITVShow } from '../itvshow';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css'],
})
export class TvShowResultComponent {
  @Input() current: Array<ITVShow>;
  constructor(private tvshowService: TvshowService) {
    this.current = [
      {
        name: '',
        genres: Array<string>(),
        image: ''
      }
    ];
    
  }
}
