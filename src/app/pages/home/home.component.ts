import { Component } from '@angular/core';
import { Action, originals, ComedyMovies, HorrorMovies, RomanceMovies } from "../../constants/constants"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public ActionUrl = Action;
  public originalsUrl = originals;
  public ComedyMoviesUrl = ComedyMovies;
  public HorrorMoviesUrl = HorrorMovies;
  public RomanceMoviesUrl = RomanceMovies;  
}
