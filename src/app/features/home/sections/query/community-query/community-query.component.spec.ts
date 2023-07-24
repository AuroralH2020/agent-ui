import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityQueryComponent } from './community-query.component';

describe('CommunityQueryComponent', () => {
  let component: CommunityQueryComponent;
  let fixture: ComponentFixture<CommunityQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityQueryComponent]
    });
    fixture = TestBed.createComponent(CommunityQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
