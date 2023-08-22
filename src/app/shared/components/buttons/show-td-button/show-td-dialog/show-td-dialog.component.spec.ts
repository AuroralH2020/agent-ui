import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTdDialogComponent } from './show-td-dialog.component';

describe('ShowTdDialogComponent', () => {
  let component: ShowTdDialogComponent;
  let fixture: ComponentFixture<ShowTdDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTdDialogComponent]
    });
    fixture = TestBed.createComponent(ShowTdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
