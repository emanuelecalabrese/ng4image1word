import { Component } from '@angular/core';
import { LetterService } from 'src/app/services/letter-service.service';

@Component({
  selector: 'app-success-button',
  templateUrl: './success-button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent {
  constructor(private letterService: LetterService) {}

  onClick() {
    this.letterService.setNewGame(true);
  }
}
