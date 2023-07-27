import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('',[Validators.minLength(3)])

  constructor()
  {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(searchValue => {
      if(!this.search.invalid){
        this.searchEvent.emit(searchValue??undefined)
      }
    })
    
  }


}
