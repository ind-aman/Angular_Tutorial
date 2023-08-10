import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleEventComponent } from './lifecycle-event.component';

describe('LifecycleEventComponent', () => {
  let component: LifecycleEventComponent;
  let fixture: ComponentFixture<LifecycleEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleEventComponent]
    });
    fixture = TestBed.createComponent(LifecycleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
