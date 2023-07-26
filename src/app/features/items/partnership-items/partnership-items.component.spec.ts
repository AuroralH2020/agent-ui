import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipItemsComponent } from './partnership-items.component';

describe('PartnershipItemsComponent', () => {
  let component: PartnershipItemsComponent;
  let fixture: ComponentFixture<PartnershipItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipItemsComponent]
    });
    fixture = TestBed.createComponent(PartnershipItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
