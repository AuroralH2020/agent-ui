import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTdButtonComponent } from './show-td-button.component';

describe('ShowTdButtonComponent', () => {
  let component: ShowTdButtonComponent;
  let fixture: ComponentFixture<ShowTdButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTdButtonComponent]
    });
    fixture = TestBed.createComponent(ShowTdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
