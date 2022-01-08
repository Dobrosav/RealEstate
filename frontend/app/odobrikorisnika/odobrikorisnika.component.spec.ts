import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdobrikorisnikaComponent } from './odobrikorisnika.component';

describe('OdobrikorisnikaComponent', () => {
  let component: OdobrikorisnikaComponent;
  let fixture: ComponentFixture<OdobrikorisnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdobrikorisnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdobrikorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
