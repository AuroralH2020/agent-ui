import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLibraryComponent } from './components-library.component';

describe('ComponentsLibraryComponent', () => {
  let component: ComponentsLibraryComponent;
  let fixture: ComponentFixture<ComponentsLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsLibraryComponent]
    });
    fixture = TestBed.createComponent(ComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
