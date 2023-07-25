import { Component } from '@angular/core';
import { ITVShow } from '../itvshow';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css']
})
export class TvShowResultComponent {
  current: ITVShow
  constructor () {
    this.current = {
    name: "The Queen's Gambit",
    genre: 'Drama',
    image: ''
    }
  }
}
