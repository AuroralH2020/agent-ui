import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterItemButtonComponent } from './register-item-button.component';

describe('RegisterItemButtonComponent', () => {
  let component: RegisterItemButtonComponent;
  let fixture: ComponentFixture<RegisterItemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterItemButtonComponent]
    });
    fixture = TestBed.createComponent(RegisterItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
