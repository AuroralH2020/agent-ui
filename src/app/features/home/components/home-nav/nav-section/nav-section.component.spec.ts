import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSectionComponent } from './nav-section.component';

describe('NavSectionComponent', () => {
  let component: NavSectionComponent;
  let fixture: ComponentFixture<NavSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSectionComponent]
    });
    fixture = TestBed.createComponent(NavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
