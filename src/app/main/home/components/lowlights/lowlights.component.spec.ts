import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowlightsComponent } from './lowlights.component';

describe('LowlightsComponent', () => {
  let component: LowlightsComponent;
  let fixture: ComponentFixture<LowlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
