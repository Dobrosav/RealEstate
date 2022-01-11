import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataAdComponent } from './change-data-ad.component';

describe('ChangeDataAdComponent', () => {
  let component: ChangeDataAdComponent;
  let fixture: ComponentFixture<ChangeDataAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDataAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDataAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
