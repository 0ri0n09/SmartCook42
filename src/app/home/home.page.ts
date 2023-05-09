import { Component } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {FavoritesService} from "../services/favorites.service";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  randomRecipes: any[];

  constructor(private spoonacularService: SpoonacularService,
              private loadingController: LoadingController,
              private favoritesService: FavoritesService,
              private alertController: AlertController) {}

  async ngOnInit() {
    await this.presentLoading();
    this.spoonacularService.getRandomRecipes(10).subscribe((recipes: any) => {
      this.randomRecipes = recipes.recipes;
      this.loadingController.dismiss();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading recipes...',
    });

    await loading.present();
  }

  isFavorite(recipe): boolean {
    return this.favoritesService.isFavorite(recipe.id);
  }

  async toggleFavorite(recipe: any) {
    const isFavorite = this.favoritesService.isFavorite(recipe.id);

    if (isFavorite) {
      // Code to remove from favorites (if needed)
    } else {
      const alert = await this.alertController.create({
        header: 'Add to favorites',
        message: 'Do you want to add this recipe to your favorites?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Add',
            handler: () => {
              this.favoritesService.addToFavorites(recipe);
            }
          }
        ]
      });

      await alert.present();
    }
  }
}
