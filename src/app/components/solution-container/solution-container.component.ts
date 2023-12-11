import { Component, Input, NgZone, OnInit } from '@angular/core';
import { LetterService } from 'src/app/services/letter-service.service';

@Component({
  selector: 'app-solution-container',
  templateUrl: './solution-container.component.html',
  styleUrls: ['./solution-container.component.css']
})
export class SolutionContainerComponent implements OnInit{
  @Input() word!: string;
  @Input() letters!: string[]; // The word to guess

  userSolution: string[] = [];
  selectedLetter!: string;
  letterIndex: number = 0;

  constructor(private letterService: LetterService) {

  }

  ngOnInit(): void {
    this.letterService.letterClicked.subscribe(letter => {
      this.selectedLetter = letter;
      this.assignLetter(this.selectedLetter);
    });
  }

  assignLetter(wordToInsert: string): void {
    (document.getElementById(this.letterIndex.toString()) as HTMLParagraphElement).innerText = wordToInsert;
    this.userSolution[this.letterIndex] = wordToInsert.toLowerCase();
    this.letterIndex++;

    if(this.letterIndex === this.letters.length) {
      setTimeout(() => {
        this.checkSolution();
      }, 250);
    }
  }

  checkSolution(): void {
    if(this.userSolution.join() === this.letters.join())
    {
      this.letterService.setIsSuccess(true);
    }
    else
    {
      for (let i = 0; i < this.letters.length; i++) {
        (document.getElementById(i.toString()) as HTMLParagraphElement).innerText = "";
      }
      this.userSolution.splice(0);
      this.letterIndex = 0;
      this.letterService.setIsSuccess(false);
    }
  }
}
