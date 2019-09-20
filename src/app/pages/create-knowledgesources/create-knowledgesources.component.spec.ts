import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnowledgesourcesComponent } from './create-knowledgesources.component';

describe('ListRolesComponent', () => {
  let component: CreateKnowledgesourcesComponent;
  let fixture: ComponentFixture<CreateKnowledgesourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKnowledgesourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKnowledgesourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
