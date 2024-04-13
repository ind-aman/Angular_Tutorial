import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCommunicationComponent } from './parent-child-communication.component';

describe('ParentChildCommunicationComponent', () => {
  let component: ParentChildCommunicationComponent;
  let fixture: ComponentFixture<ParentChildCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildCommunicationComponent]
    });
    fixture = TestBed.createComponent(ParentChildCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
