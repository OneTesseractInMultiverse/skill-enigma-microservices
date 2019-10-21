import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearnSourcesComponent } from './create-learn-sources.component';

describe('CreateLearnSourcesComponent', () => {
  let component: CreateLearnSourcesComponent;
  let fixture: ComponentFixture<CreateLearnSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLearnSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLearnSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
