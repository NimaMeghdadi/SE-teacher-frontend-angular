import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewRoutingComponent } from './class-view-routing.component';

describe('ClassViewRoutingComponent', () => {
  let component: ClassViewRoutingComponent;
  let fixture: ComponentFixture<ClassViewRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
