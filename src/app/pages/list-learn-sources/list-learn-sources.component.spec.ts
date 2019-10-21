import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLearnSourcesComponent } from './list-learn-sources.component';

describe('ListLearnSourcesComponent', () => {
  let component: ListLearnSourcesComponent;
  let fixture: ComponentFixture<ListLearnSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLearnSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLearnSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
