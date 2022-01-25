import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPKeyComponent } from './otp-key.component';

describe('OTPKeyComponent', () => {
  let component: OTPKeyComponent;
  let fixture: ComponentFixture<OTPKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
