import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNotFoundPageComponent } from './movie-not-found-page.component';

describe('MovieNotFoundPageComponent', () => {
  let component: MovieNotFoundPageComponent;
  let fixture: ComponentFixture<MovieNotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNotFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
