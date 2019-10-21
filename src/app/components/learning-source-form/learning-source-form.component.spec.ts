import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSourceFormComponent } from './learning-source-form.component';

describe('LearningSourceFormComponent', () => {
  let component: LearningSourceFormComponent;
  let fixture: ComponentFixture<LearningSourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
