import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRoutingComponent } from './management-routing.component';

describe('ManagementRoutingComponent', () => {
  let component: ManagementRoutingComponent;
  let fixture: ComponentFixture<ManagementRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
