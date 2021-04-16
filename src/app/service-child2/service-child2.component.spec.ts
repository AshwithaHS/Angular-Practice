import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild2Component } from './service-child2.component';

describe('ServiceChild2Component', () => {
  let component: ServiceChild2Component;
  let fixture: ComponentFixture<ServiceChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
