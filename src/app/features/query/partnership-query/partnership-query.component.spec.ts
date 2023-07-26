import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipQueryComponent } from './partnership-query.component';

describe('PartnershipQueryComponent', () => {
  let component: PartnershipQueryComponent;
  let fixture: ComponentFixture<PartnershipQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipQueryComponent]
    });
    fixture = TestBed.createComponent(PartnershipQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
