import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizuserComponent } from './quizuser.component';

describe('QuizuserComponent', () => {
  let component: QuizuserComponent;
  let fixture: ComponentFixture<QuizuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
