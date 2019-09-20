import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListKnowledgesourcesComponent } from './list-knowledgesources.component';

describe('ListKnowledgeSourcesComponent', () => {
  let component: ListKnowledgesourcesComponent;
  let fixture: ComponentFixture<ListKnowledgesourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKnowledgesourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKnowledgesourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
