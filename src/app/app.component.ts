import { Component } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { ITVShow } from './itvshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvshow-web-app';
  tvShow: ITVShow[] =
  [
  {
    name: '',
    genres: Array<string>(),
    image: ''
  }]
  constructor(private tvshowService: TvshowService)
  {}
    doSearch(searchValue:string)
    {
      const userInput = searchValue
      this.tvshowService.getShows(userInput).subscribe(data => this.tvShow = data)

    }

}
