import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { LetterService } from 'src/app/services/letter-service.service';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['../letters-container/letters-container.component.css','./letter-box.component.css']
})
export class LetterBoxComponent {
  @Input() isSolution!: boolean;
  @Input() letter?: string; // this is for the letter container
  @Input() selectedLetter?: string;
  @Input() paragraphId!: string;

  constructor(private letterService: LetterService) {
  }

  onClick() {
    if(!this.isSolution){
      this.letterService.setLetterClicked(this.letter!);
    }
  }
}
