import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowResultComponent } from './tv-show-result.component';

describe('TvShowResultComponent', () => {
  let component: TvShowResultComponent;
  let fixture: ComponentFixture<TvShowResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowResultComponent]
    });
    fixture = TestBed.createComponent(TvShowResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
