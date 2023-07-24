import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonldEditorComponent } from './jsonld-editor.component';

describe('JsonldEditorComponent', () => {
  let component: JsonldEditorComponent;
  let fixture: ComponentFixture<JsonldEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonldEditorComponent]
    });
    fixture = TestBed.createComponent(JsonldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
