import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPictogramComponent } from './community-pictogram.component';

describe('CommunityPictogramComponent', () => {
  let component: CommunityPictogramComponent;
  let fixture: ComponentFixture<CommunityPictogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityPictogramComponent]
    });
    fixture = TestBed.createComponent(CommunityPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
