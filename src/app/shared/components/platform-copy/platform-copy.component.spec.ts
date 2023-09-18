import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCopyComponent } from './platform-copy.component';

describe('PlatformCopyComponent', () => {
  let component: PlatformCopyComponent;
  let fixture: ComponentFixture<PlatformCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformCopyComponent]
    });
    fixture = TestBed.createComponent(PlatformCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
