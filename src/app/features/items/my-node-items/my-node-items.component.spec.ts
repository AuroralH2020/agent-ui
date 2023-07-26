import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNodeItemsComponent } from './my-node-items.component';

describe('MyNodeItemsComponent', () => {
  let component: MyNodeItemsComponent;
  let fixture: ComponentFixture<MyNodeItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNodeItemsComponent]
    });
    fixture = TestBed.createComponent(MyNodeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
