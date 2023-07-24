import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgQueryComponent } from './my-org-query.component';

describe('MyOrgQueryComponent', () => {
  let component: MyOrgQueryComponent;
  let fixture: ComponentFixture<MyOrgQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrgQueryComponent]
    });
    fixture = TestBed.createComponent(MyOrgQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
