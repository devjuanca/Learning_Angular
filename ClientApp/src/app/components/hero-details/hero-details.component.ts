import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-datails',
  templateUrl: './hero-details.component.html'

})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

     this._activatedRoute.params.subscribe(params => {
     this.hero = _heroesService.getHeroDetails(params['id']);
    });
  }

  //getBrandImage(){
  //  let url = {};
  //  if (this.hero.casa == 'DC') {
  //    url = "assets/img/dc.png"
    
  //  }
  //  else {
  //    url = "assets/img/marvel.png";
    
  //  }
  //  console.log(url);
  //  return url;
  //}

  ngOnInit() {
  }

}
