import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessButtonComponent } from './success-button.component';

describe('SuccessButtonComponent', () => {
  let component: SuccessButtonComponent;
  let fixture: ComponentFixture<SuccessButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessButtonComponent]
    });
    fixture = TestBed.createComponent(SuccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
