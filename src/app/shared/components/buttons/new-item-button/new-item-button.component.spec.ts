import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemButtonComponent } from './new-item-button.component';

describe('RegisterItemButtonComponent', () => {
  let component: NewItemButtonComponent;
  let fixture: ComponentFixture<NewItemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewItemButtonComponent]
    });
    fixture = TestBed.createComponent(NewItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
