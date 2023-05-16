import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/favorites.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteRecipes: any[] = [];

  constructor(
      private favoritesService: FavoritesService,
      private toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.favoriteRecipes = this.favoritesService.getFavoriteRecipes();
  }

  async removeFromFavorites(recipeId: number): Promise<void> {
    try {
      this.favoritesService.removeFavorite(recipeId);
      const toast = await this.toastController.create({
        message: 'The favorite has been removed successfully',
        duration: 2000,
        position: 'top',
        animated: true,
        color: 'danger'
      });
      toast.present();
    } catch (error) {
      console.log('Error removing favorite:', error);
    }
    this.favoriteRecipes = this.favoritesService.getFavoriteRecipes();
  }

}
