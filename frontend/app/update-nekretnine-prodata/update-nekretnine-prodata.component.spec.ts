import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNekretnineProdataComponent } from './update-nekretnine-prodata.component';

describe('UpdateNekretnineProdataComponent', () => {
  let component: UpdateNekretnineProdataComponent;
  let fixture: ComponentFixture<UpdateNekretnineProdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNekretnineProdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNekretnineProdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
