import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdUploadComponent } from './td-upload.component';

describe('TdUploadComponent', () => {
  let component: TdUploadComponent;
  let fixture: ComponentFixture<TdUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdUploadComponent]
    });
    fixture = TestBed.createComponent(TdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
