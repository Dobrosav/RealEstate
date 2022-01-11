import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJSONComponent } from './upload-json.component';

describe('UploadJSONComponent', () => {
  let component: UploadJSONComponent;
  let fixture: ComponentFixture<UploadJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadJSONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
