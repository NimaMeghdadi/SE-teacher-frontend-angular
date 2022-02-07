import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSearchFilterComponent } from './class-search-filter.component';

describe('ClassSearchFilterComponent', () => {
  let component: ClassSearchFilterComponent;
  let fixture: ComponentFixture<ClassSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
