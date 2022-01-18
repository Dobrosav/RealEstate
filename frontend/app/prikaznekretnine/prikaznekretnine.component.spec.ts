import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikaznekretnineComponent } from './prikaznekretnine.component';

describe('PrikaznekretnineComponent', () => {
  let component: PrikaznekretnineComponent;
  let fixture: ComponentFixture<PrikaznekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikaznekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikaznekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
