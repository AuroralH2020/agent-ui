import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNodeQueryComponent } from './my-node-query.component';

describe('MyNodeQueryComponent', () => {
  let component: MyNodeQueryComponent;
  let fixture: ComponentFixture<MyNodeQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNodeQueryComponent]
    });
    fixture = TestBed.createComponent(MyNodeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
