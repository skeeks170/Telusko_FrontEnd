import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizadmin',
  templateUrl: './quizadmin.component.html',
  styleUrls: ['./quizadmin.component.css']
})
export class QuizadminComponent implements OnInit{
  
  questions: any[] = [];
  selectedQuestion: any = null;
  isNewQuestion: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchQuizQuestions();
  }

  fetchQuizQuestions() {
    this.http.get<any[]>('http://localhost:8080/quiz/quizQuestions').subscribe(
      (response) => {
        this.questions = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addQuestion() {
    this.selectedQuestion = {
      question: '',
      optionAnswer: '',
      option2: '',
      option3: '',
      option4: '',
      category: ''
    };
    this.isNewQuestion = true;
  }

  editQuestion(question: any) {
    this.selectedQuestion = { ...question };
    this.isNewQuestion = false;
  }

  cancelEdit() {
    this.selectedQuestion = null;
  }

  saveQuestion() {
    if (this.isNewQuestion) {
      this.http.post<any>('http://localhost:8080/quiz/addQuestionToDB', this.selectedQuestion).subscribe(
        (response) => {
          this.questions.push(response);
          this.selectedQuestion = null;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.http.put<any>(`http://localhost:8080/quiz/question/${this.selectedQuestion.id}`, this.selectedQuestion).subscribe(
        (response) => {
          const index = this.questions.findIndex(q => q.id === response.id);
          if (index !== -1) {
            this.questions[index] = response;
          }
          this.selectedQuestion = null;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  deleteQuestion(questionId: number) {
    this.http.delete<string>(`http://localhost:8080/quiz/deleteQuestion/${questionId}`).subscribe(
      (response) => {
        const index = this.questions.findIndex(q => q.id === questionId);
        if (index !== -1) {
          this.questions.splice(index, 1);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}