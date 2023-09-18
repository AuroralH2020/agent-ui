import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemButtonComponent } from './create-item-button.component';

describe('CreateItemButtonComponent', () => {
  let component: CreateItemButtonComponent;
  let fixture: ComponentFixture<CreateItemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateItemButtonComponent]
    });
    fixture = TestBed.createComponent(CreateItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
