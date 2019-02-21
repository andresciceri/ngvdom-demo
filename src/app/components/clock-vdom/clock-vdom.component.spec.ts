import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockVdomComponent } from './clock-vdom.component';

describe('ClockVdomComponent', () => {
  let component: ClockVdomComponent;
  let fixture: ComponentFixture<ClockVdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockVdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockVdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
