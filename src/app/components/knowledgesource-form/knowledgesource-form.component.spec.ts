import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgesourceFormComponent } from './knowledgesource-form.component';

describe('KnowledgesourceFormComponent', () => {
  let component: KnowledgesourceFormComponent;
  let fixture: ComponentFixture<KnowledgesourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgesourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgesourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
