import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStoryComponent } from './random-story.component';

describe('RandomStoryComponent', () => {
  let component: RandomStoryComponent;
  let fixture: ComponentFixture<RandomStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomStoryComponent]
    });
    fixture = TestBed.createComponent(RandomStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
