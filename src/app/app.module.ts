import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesContainerComponent } from './components/images-container/images-container.component';
import { SolutionContainerComponent } from './components/solution-container/solution-container.component';
import { LetterBoxComponent } from './components/letter-box/letter-box.component';
import { LettersContainerComponent } from './components/letters-container/letters-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesContainerComponent,
    SolutionContainerComponent,
    LetterBoxComponent,
    LettersContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
