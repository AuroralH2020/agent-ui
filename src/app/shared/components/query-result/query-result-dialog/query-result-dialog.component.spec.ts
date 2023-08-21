import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryResultDialogComponent } from './query-result-dialog.component';

describe('QueryResultDialogComponent', () => {
  let component: QueryResultDialogComponent;
  let fixture: ComponentFixture<QueryResultDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryResultDialogComponent]
    });
    fixture = TestBed.createComponent(QueryResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
