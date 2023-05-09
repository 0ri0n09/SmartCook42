import { Component, ViewChild } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FavoritesService } from "../services/favorites.service";
import { IonSlides } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  randomRecipes: any[];

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(private spoonacularService: SpoonacularService,
              private loadingController: LoadingController,
              private favoritesService: FavoritesService,
              private toastController: ToastController,
              private alertController: AlertController) {}

  async ngOnInit() {
    await this.presentLoading();
    this.spoonacularService.getRandomRecipes(10).subscribe((recipes: any) => {
      this.randomRecipes = recipes.recipes;
      this.loadingController.dismiss();
    });
  }

  async refreshRandomRecipes() {
    try {
      const recipes: any = await this.spoonacularService.getRandomRecipes(10).toPromise();
      const toast = await this.toastController.create({
        message: 'Loading new recipes :)',
        position: 'top',
        animated: true,
        color: 'primary',
        duration: 2300
      });
      toast.present();
      toast.onDidDismiss();
      this.randomRecipes = recipes.recipes;
      await this.loadingController.dismiss();
      await this.slides.slideTo(0);
    } catch (error) {
      console.log('Error while refreshing new recipes', error);
    }
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
