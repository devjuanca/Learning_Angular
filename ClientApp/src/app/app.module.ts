//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'heroes', component: HeroesComponent, pathMatch: 'full' },
      { path: 'hero_details/:id', component: HeroDetailsComponent, pathMatch: 'full' },

      { path: '*', redirectTo: 'home', pathMatch: 'full' },
  
    ])
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
