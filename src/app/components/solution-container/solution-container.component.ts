import { Component, Input, OnInit } from '@angular/core';
import { LetterService } from 'src/app/services/letter-service.service';

@Component({
  selector: 'app-solution-container',
  templateUrl: './solution-container.component.html',
  styleUrls: ['./solution-container.component.css']
})
export class SolutionContainerComponent implements OnInit{
  @Input() word!: string;
  @Input() letters!: string[];

  selectedLetter!: string;

  constructor(private letterService: LetterService) {

  }

  ngOnInit(): void {
    this.letterService.letterClicked.subscribe(letter => this.selectedLetter = letter);
  }
}
