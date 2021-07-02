import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroessService:HeroesService, private _router:Router) { }

  ngOnInit() {
    this.heroes = this._heroessService.getHeroes();

   
  }

  getHeroDetails(i: number) {
    this._router.navigate(['/hero_details', i]);
  }

}
