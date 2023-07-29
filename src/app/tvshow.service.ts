import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITVShowData } from './itvshow-data';
import { ITVShow } from './itvshow';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  constructor(private httpClient: HttpClient) {}
  getShows(input: string) {
    return this.httpClient
      .get<Array<ITVShowData>>(`https://api.tvmaze.com/search/shows?q=${input}`)
      .pipe(map((data) => this.transformToITVShow(data)));
  }
  private transformToITVShow(data: Array<ITVShowData>): Array<ITVShow> {
    const result: Array<ITVShow> = [];
    console.log(data);
    data.map((showItem) => {
      result.push({
        name: showItem.show.name,
        genres: showItem.show.genres,
        image:showItem.show.image? showItem.show.image.original: 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
      })
    });
    console.log(result);
    return result;
  }
}
