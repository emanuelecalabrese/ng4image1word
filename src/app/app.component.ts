import { Component, OnInit } from '@angular/core';
import { Word } from './models/word';
import { LetterService } from './services/letter-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  words: Word[] = [];
  word!: Word;
  letters?: string[];
  isSuccess: boolean = false;

  constructor(private letterService: LetterService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Word[]>('../assets/db.json').subscribe(res => {
      this.words = res.map((data) => ({
        ...data,
        images: data.images?.map(image => `../assets/${image}`)
      }))
      this.word = this.randomWord(this.words);
      this.letters = this.word.title?.split("");
    });

    this.letterService.isSuccess.subscribe(success => {
      if(success !== this.isSuccess)
          this.isSuccess = success;
    });

    this.letterService.isNewGame.subscribe(() => {
      this.isSuccess = false;
      this.letterService.setIsSuccess(this.isSuccess);

      this.newGame();
    })
  }

  newGame(): void {
    this.word = this.randomWord(this.words);
    this.letters = this.word.title?.split("");
  }

  randomWord(words: Word[]): Word {
    let index = Math.random() * words.length - 1;
    return words[Math.round(index)];
  }
}
