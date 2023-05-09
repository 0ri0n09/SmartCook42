import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoriteRecipes';

  constructor() {}

  getFavoriteRecipes() {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addToFavorites(recipe: any) {
    const favorites = this.getFavoriteRecipes();
    favorites.push(recipe);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(recipeId: number) {
    const favorites = this.getFavoriteRecipes();
    return favorites.some(recipe => recipe.id === recipeId);
  }

  removeFavorite(recipeId: number): void {
    const favorites = this.getFavoriteRecipes();
    const updatedFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedFavorites));
  }
}
