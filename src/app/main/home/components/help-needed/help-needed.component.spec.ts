import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNeededComponent } from './help-needed.component';

describe('HelpNeededComponent', () => {
  let component: HelpNeededComponent;
  let fixture: ComponentFixture<HelpNeededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpNeededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
