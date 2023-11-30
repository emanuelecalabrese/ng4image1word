import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersContainerComponent } from './letters-container.component';

describe('LettersContainerComponent', () => {
  let component: LettersContainerComponent;
  let fixture: ComponentFixture<LettersContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LettersContainerComponent]
    });
    fixture = TestBed.createComponent(LettersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
