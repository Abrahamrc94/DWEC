import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero : Hero;

  constructor() {
    this.selectedHero={ id: 11, name: 'Dr Nice' };
  }

  ngOnInit() {
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}