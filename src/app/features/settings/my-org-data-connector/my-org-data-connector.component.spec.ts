import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgDataConnectorComponent } from './my-org-data-connector.component';

describe('MyOrgDataConnectorComponent', () => {
  let component: MyOrgDataConnectorComponent;
  let fixture: ComponentFixture<MyOrgDataConnectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrgDataConnectorComponent]
    });
    fixture = TestBed.createComponent(MyOrgDataConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
