import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKnowledgesourcesComponent } from './update-knowledgesources.component';

describe('ListRolesComponent', () => {
  let component: UpdateKnowledgesourcesComponent;
  let fixture: ComponentFixture<UpdateKnowledgesourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKnowledgesourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKnowledgesourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
