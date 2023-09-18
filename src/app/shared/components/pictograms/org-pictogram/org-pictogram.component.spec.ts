import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPictogramComponent } from './org-pictogram.component';

describe('OrgPictogramComponent', () => {
  let component: OrgPictogramComponent;
  let fixture: ComponentFixture<OrgPictogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgPictogramComponent]
    });
    fixture = TestBed.createComponent(OrgPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
