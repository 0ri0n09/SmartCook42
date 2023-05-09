import { Component, OnInit } from '@angular/core';
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoriteRecipes: any[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.favoriteRecipes = this.favoritesService.getFavoriteRecipes();
  }

  removeFromFavorites(recipeId: number): void {
    this.favoritesService.removeFavorite(recipeId);
    this.favoriteRecipes = this.favoritesService.getFavoriteRecipes();
  }

}
