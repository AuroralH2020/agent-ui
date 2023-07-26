import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityItemsComponent } from './community-items.component';

describe('CommunityItemsComponent', () => {
  let component: CommunityItemsComponent;
  let fixture: ComponentFixture<CommunityItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityItemsComponent]
    });
    fixture = TestBed.createComponent(CommunityItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
