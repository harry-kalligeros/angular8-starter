import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLayoutComponent } from './employees-layout.component';

describe('EmployeesLayoutComponent', () => {
  let component: EmployeesLayoutComponent;
  let fixture: ComponentFixture<EmployeesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
