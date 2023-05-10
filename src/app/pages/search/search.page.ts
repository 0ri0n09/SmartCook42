import { Component, OnInit } from '@angular/core';
import {SpoonacularService} from "../../services/spoonacular.service";
import {FavoritesService} from "../../services/favorites.service";
import {LoadingController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery: string;
  recipes: any[];

  diets = ['Vegan', 'Vegetarian', 'Paleo', 'Ketogenic', 'Gluten Free'];
  cuisines = [
    'African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese',
  ];
  types = ['Main Course', 'Side Dish', 'Dessert', 'Appetizer', 'Salad', 'Bread', 'Breakfast', 'Soup', 'Beverage', 'Sauce', 'Marinade', 'Fingerfood', 'Snack', 'Drink'];
  intolerances = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'];
  occasions = ['Brunch', 'Dinner', 'Lunch', 'Party', 'Summer'];
  selectedDiet: string;
  selectedCuisine: string;
  selectedType: string;
  selectedIntolerances: string[] = [];
  selectedOccasion: string;



  constructor(private spoonacularService: SpoonacularService,
              private favoritesService: FavoritesService,
              private toastController: ToastController,
              private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async searchRecipes() {
    await this.presentLoading();
    const intolerances = this.selectedIntolerances.join(',');
    this.spoonacularService.searchRecipes(
        this.searchQuery,
        10,
        this.selectedDiet,
        this.selectedCuisine,
        intolerances,
        this.selectedType,
        this.selectedOccasion).subscribe(async (response: any) => {
          this.recipes = response.results;
          await this.loadingController.dismiss();
        },
        async (error) => {
          console.log('Error searching recipes:', error);
          await this.loadingController.dismiss();
        }
    );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading recipes...',
    });

    await loading.present();
  }

  async clearFilter(filter: string) {
    switch (filter) {
      case 'diet':
        this.selectedDiet = null;
        break;
      case 'cuisine':
        this.selectedCuisine = null;
        break;
      case 'type':
        this.selectedType = null;
        break;
      case 'intolerances':
        this.selectedIntolerances = [];
        break;
      case 'occasion':
        this.selectedOccasion = null;
        break;
    }
    if (this.selectedDiet || this.selectedCuisine || this.selectedType || this.selectedIntolerances.length > 0 || this.selectedOccasion) {
      await this.presentLoading();
    } else {
      await this.loadingController.dismiss();
    }
    this.searchRecipes();
  }

  isFavorite(recipe): boolean {
    return this.favoritesService.isFavorite(recipe.id);
  }

  async toggleFavorite(recipe: any) {
    const isFavorite = this.favoritesService.isFavorite(recipe.id);
    if (isFavorite) {} else {
      await this.favoritesService.addToFavorites(recipe);
      const toast = await this.toastController.create({
        message: 'Recipe added to favorites',
        duration: 2000,
        position: 'top',
        animated: true,
        color: 'success'
      });
      toast.present();
    }
  }

}
