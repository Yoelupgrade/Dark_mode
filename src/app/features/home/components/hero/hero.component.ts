import { Hero } from './../../../../shared/models/shared';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() public hero!: Hero;
  constructor() {
    this.hero = {
      title: 'BLACK MODE',
      text: 'Press to change the background',
      textbutton: 'Change gold',
      color: 'black'
    }
   }

  ngOnInit(): void {
  }
public changecolor = () => {
  this.hero.color === 'black' ? this.hero.color = 'gold' : this.hero.color = 'black'
  this.hero.color === 'gold' ? this.hero.textbutton = 'Change black' : this.hero.textbutton = 'Change gold'
  return this.hero.color
}
}
