import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsPreviewComponent } from './props-preview.component';

describe('PropsPreviewComponent', () => {
  let component: PropsPreviewComponent;
  let fixture: ComponentFixture<PropsPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropsPreviewComponent]
    });
    fixture = TestBed.createComponent(PropsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
