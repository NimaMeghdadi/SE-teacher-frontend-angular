import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRoutingComponent } from './professor-routing.component';

describe('ProfessorRoutingComponent', () => {
  let component: ProfessorRoutingComponent;
  let fixture: ComponentFixture<ProfessorRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
