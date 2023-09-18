import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNodeComponent } from './my-node.component';

describe('MyNodeComponent', () => {
  let component: MyNodeComponent;
  let fixture: ComponentFixture<MyNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNodeComponent]
    });
    fixture = TestBed.createComponent(MyNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
