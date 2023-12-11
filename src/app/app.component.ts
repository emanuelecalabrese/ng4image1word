import { Component, OnInit } from '@angular/core';
import { Word } from './models/word';
import { LetterService } from './services/letter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  words: Word[] = [
    {
      title: "acqua",
      images: [
        '../../../assets/img/water/water1.jpg',
        '../../../assets/img/water/water2.jpg',
        '../../../assets/img/water/water3.jpg',
        '../../../assets/img/water/water4.jpg',
      ]
    },
    {
      title: "fuoco",
      images: [
        '../../../assets/img/fire/fire1.jpg',
        '../../../assets/img/fire/fire2.jpg',
        '../../../assets/img/fire/fire3.jpg',
        '../../../assets/img/fire/fire4.jpg',
      ]
    },
    {
      title: "sabbia",
      images: [
        '../../../assets/img/sand/sand1.jpg',
        '../../../assets/img/sand/sand2.jpg',
        '../../../assets/img/sand/sand3.jpg',
        '../../../assets/img/sand/sand4.jpg',

      ]
    },
    {
      title: "topo",
      images: [
        '../../../assets/img/mouse/mouse1.jpg',
        '../../../assets/img/mouse/mouse2.jpg',
        '../../../assets/img/mouse/mouse3.jpg',
        '../../../assets/img/mouse/mouse4.jpg',
      ]
    },
    {
      title: "panino",
      images: [
        '../../../assets/img/sandwich/sandwich1.jpg',
        '../../../assets/img/sandwich/sandwich2.jpg',
        '../../../assets/img/sandwich/sandwich3.jpg',
        '../../../assets/img/sandwich/sandwich4.jpg',
      ]
    }
  ];
  word!: Word;
  letters!: string[];
  isSuccess: boolean = false;

  constructor(private letterService: LetterService) {

  }

  ngOnInit(): void {
    this.word = this.randomWord(this.words);
    this.letters = this.word.title.split("");
    this.letterService.isSuccess.subscribe(success => {
      if(success !== this.isSuccess)
          this.isSuccess = success;
    });
  }

  randomWord(words: Word[]): Word {
    let index = Math.random() * words.length - 1;
    return words[Math.round(index)];
  }
}
