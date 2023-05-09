import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpoonacularService } from "../../services/spoonacular.service";
import {AlertController, LoadingController} from '@ionic/angular';
import {forkJoin} from "rxjs";
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  isLoaded: boolean = false;
  recipe: any;
  id: any;
  similarRecipes: any;
  constructor(private activatedRoute: ActivatedRoute,
              private spoonacularService: SpoonacularService,
              private loadingCtrl: LoadingController,
              private favoritesService: FavoritesService,
              private alertController: AlertController) { }

  async ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    await this.presentLoading();

    const recipeDetails$ = this.spoonacularService.getRecipeDetailsById(this.id);
    const similarRecipes$ = this.spoonacularService.getSimilarRecipesById(this.id);

    forkJoin({
      recipeDetails: recipeDetails$,
      similarRecipes: similarRecipes$
    }).subscribe(
        (data: any) => {
          this.recipe = data.recipeDetails;
          this.similarRecipes = data.similarRecipes;
          console.log(this.similarRecipes);
          this.isLoaded = true;
          this.loadingCtrl.dismiss();
        },
        (error) => {
          console.error(error);
          this.loadingCtrl.dismiss();
        }
    );
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();
  }

    isFavorite(): boolean {
        return this.favoritesService.isFavorite(this.recipe.id);
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