import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKontaktComponent } from './update-kontakt.component';

describe('UpdateKontaktComponent', () => {
  let component: UpdateKontaktComponent;
  let fixture: ComponentFixture<UpdateKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKontaktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
