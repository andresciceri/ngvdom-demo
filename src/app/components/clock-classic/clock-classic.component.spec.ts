import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockClassicComponent } from './clock-classic.component';

describe('ClockClassicComponent', () => {
  let component: ClockClassicComponent;
  let fixture: ComponentFixture<ClockClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
