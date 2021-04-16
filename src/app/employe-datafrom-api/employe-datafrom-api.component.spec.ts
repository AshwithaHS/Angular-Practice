import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDatafromApiComponent } from './employe-datafrom-api.component';

describe('EmployeDatafromApiComponent', () => {
  let component: EmployeDatafromApiComponent;
  let fixture: ComponentFixture<EmployeDatafromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDatafromApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDatafromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
