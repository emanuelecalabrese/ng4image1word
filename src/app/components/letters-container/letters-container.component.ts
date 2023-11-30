import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-container',
  templateUrl: './letters-container.component.html',
  styleUrls: ['./letters-container.component.css'],
})
export class LettersContainerComponent implements OnInit {
  @Input() word!: string;
  @Input() letters!: string[];

  alphabet: Array<string> = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
  finalLettersList: string[] = [];
  remainingLetters!: number;

  ngOnInit(): void {
    this.fillLetterListWithSolution();
    this.fillLetterListWithAlphabet(this.alphabet);
    this.shuffleLetters(this.finalLettersList);
  }

  fillLetterListWithSolution() {
    this.letters.forEach((letter) => this.finalLettersList.push(letter.toUpperCase()));
   }

  fillLetterListWithAlphabet(alphabet: string[]) {
    const lettersToAdd = 12 - this.finalLettersList.length;

    for (let i = 0; i < lettersToAdd; i++) {
      let index = Math.round(Math.random() * (alphabet.length - 1));
      this.finalLettersList.push(alphabet[index]);
    }
  }

  shuffleLetters(letters: string[]) {
    letters.sort(() => Math.random() - 0.5);
  }
}
