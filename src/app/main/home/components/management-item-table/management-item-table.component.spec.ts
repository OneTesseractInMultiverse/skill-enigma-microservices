import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementItemTableComponent } from './management-item-table.component';

describe('ManagementItemTableComponent', () => {
  let component: ManagementItemTableComponent;
  let fixture: ComponentFixture<ManagementItemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementItemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
