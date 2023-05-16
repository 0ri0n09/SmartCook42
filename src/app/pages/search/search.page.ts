import {Component, OnInit } from '@angular/core';
import { SpoonacularService } from "../../services/spoonacular.service";
import { FavoritesService } from "../../services/favorites.service";
import { LoadingController, ToastController} from "@ionic/angular";
import { Subject } from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    searchQuery: string;
    searchIngredients: string;
    searchIngredients$: Subject<string> = new Subject<string>();
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
    view = 'view2';

    constructor(private spoonacularService: SpoonacularService,
                private favoritesService: FavoritesService,
                private toastController: ToastController,
                private loadingController: LoadingController,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.searchIngredients$.pipe(
        ).subscribe((query) => {
            this.searchRecipesByIngredients(query);
        });

        this.activatedRoute.queryParams.subscribe(params => {
            if (params.searchIngredients) {
                const ingredients = JSON.parse(params.searchIngredients);
                this.searchIngredients = ingredients.join(' ');
                this.searchIngredients$.next(this.searchIngredients);
                this.searchRecipesByIngredients(this.searchIngredients);
            }
        });
    }

    toggleContent() {
        this.view = this.view === 'view1' ? 'view2' : 'view1';
    }

    async searchRecipesByIngredients(ingredients: string) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const loading = await this.presentLoading();
        this.spoonacularService.searchRecipesByIngredients(ingredients)
            .subscribe(
                async (response: any) => {
                    this.recipes = response;
                    await loading.dismiss();
                    if (this.recipes.length === 0) {
                        const toast = await this.toastController.create({
                            message: 'No recipes found with these ingredients',
                            duration: 2000,
                            position: 'top',
                            animated: true,
                            color: 'danger'
                        });
                        toast.present();
                    }
                },
                async (error) => {
                    console.log('Error searching recipes:', error);
                    await loading.dismiss();
                }
            );
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Loading recipes...'
        });
        await loading.present();
        return loading;
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
            this.selectedOccasion
        ).subscribe(
            async (response: any) => {
                this.recipes = response.results;
                await this.loadingController.dismiss();
                if (this.recipes.length === 0) {
                    const toast = await this.toastController.create({
                        message: 'No recipes found with this search',
                        duration: 2000,
                        position: 'top',
                        animated: true,
                        color: 'danger'
                    });
                    toast.present();
                }
            },
            async (error) => {
                console.log('Error searching recipes:', error);
                await this.loadingController.dismiss();
            }
        );
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
        if (!this.selectedDiet && !this.selectedCuisine && !this.selectedType && this.selectedIntolerances.length === 0 && !this.selectedOccasion) {
            await this.loadingController.dismiss();
        } else {
            await this.presentLoading();
        }
        this.searchRecipes();
    }

    isFavorite(recipe: any): boolean {
        return this.favoritesService.isFavorite(recipe.id);
    }

    async toggleFavorite(recipe: any) {
        const isFavorite = this.favoritesService.isFavorite(recipe.id);
        if (isFavorite) {
            // Remove from favorites
        } else {
            // Add to favorites
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
