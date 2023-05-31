import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizadminComponent } from './quizadmin.component';

describe('QuizadminComponent', () => {
  let component: QuizadminComponent;
  let fixture: ComponentFixture<QuizadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
