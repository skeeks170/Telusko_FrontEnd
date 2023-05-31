import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quizuser',
  templateUrl: './quizuser.component.html',
  styleUrls: ['./quizuser.component.css']
})
export class QuizuserComponent {

  selectedCategory: string = '';
  categories: string[] = ['Test', 'Java', 'General Knowledge']; // Replace with your actual categories
  questions: any[] = [];
  selectedAnswers: string[] = [];
  score: string | null = null;
  shuffledOptions: string[][] = []; // New property to store shuffled options

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  onCategoryChange() {
    if (this.selectedCategory) {
      this.fetchQuizQuestions();
    } else {
      this.questions = [];
      this.selectedAnswers = [];
      this.score = null;
    }
  }

  fetchQuizQuestions() {
    this.http.get<any[]>(`http://localhost:8080/quiz/questions/${this.selectedCategory}`).subscribe(
      (response) => {
        this.questions = response;
        this.selectedAnswers = new Array(this.questions.length).fill('');
        this.generateShuffledOptions(); // Generate shuffled options after fetching questions
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submitQuiz() {
    const quizAnswers = this.questions.map((question, index) => ({
      ...question,
      optionAnswer: this.selectedAnswers[index]
    }));
  
    this.http.post<number>(`http://localhost:8080/quiz/submit?userName=John`, quizAnswers).subscribe(
      (response) => {
        const totalQuestions = this.questions.length;
        const correctAnswers = response;
        this.score = `${correctAnswers}/${totalQuestions}`;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Function to shuffle the options array
  shuffleOptions(options: string[]): string[] {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

generateShuffledOptions(): void {
  this.shuffledOptions = this.questions.map((question) => {
    const options = [question.optionAnswer, question.option2, question.option3, question.option4];
    return this.shuffleOptions(options);
  });
}


}
