import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgComponent } from './my-org.component';

describe('MyOrgComponent', () => {
  let component: MyOrgComponent;
  let fixture: ComponentFixture<MyOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrgComponent]
    });
    fixture = TestBed.createComponent(MyOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
