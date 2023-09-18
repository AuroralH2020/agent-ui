import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongIdComponent } from './long-id.component';

describe('LongIdComponent', () => {
  let component: LongIdComponent;
  let fixture: ComponentFixture<LongIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongIdComponent]
    });
    fixture = TestBed.createComponent(LongIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
