import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  letterClicked: EventEmitter<string> = new EventEmitter();
  isSuccess: EventEmitter<boolean> = new EventEmitter();

  setLetterClicked(letter: string) {
    this.letterClicked.emit(letter);
  }

  setIsSuccess(success: boolean) {
    this.isSuccess.emit(success);
  }
}
