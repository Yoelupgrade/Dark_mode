import { Component, Input} from '@angular/core';
import { Hero } from '../app/shared/models/shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'darkmode-app';
  @Input() public hero!: Hero;
  constructor() {
    this.hero = {
      title: 'BLACK MODE',
      text: 'Press to change the background',
      textbutton: 'Change gold',
      color: 'black'
    }
   }
   public changecolor = () => {
    this.hero.color === 'black' ? this.hero.color = 'gold' : this.hero.color = 'black'
    this.hero.color === 'gold' ? this.hero.textbutton = 'Change black' : this.hero.textbutton = 'Change gold'
    return this.hero.color
  }
}

