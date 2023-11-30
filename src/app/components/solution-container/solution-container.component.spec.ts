import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionContainerComponent } from './solution-container.component';

describe('SolutionContainerComponent', () => {
  let component: SolutionContainerComponent;
  let fixture: ComponentFixture<SolutionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionContainerComponent]
    });
    fixture = TestBed.createComponent(SolutionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
