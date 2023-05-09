import { Component, OnInit } from '@angular/core';
import {Firestore, deleteDoc, doc, getDocs, collection, addDoc} from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../profile/profile.service';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { User } from '@angular/fire/auth';
import { SpoonacularService } from "../../services/spoonacular.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  ingredients: any[];
  searchQuery: string;
  searchResults: any[];
  private currentUser: User;

  constructor(
      private firestore: Firestore,
      private authService: AuthService,
      private profileService: ProfileService,

      private spoonacularService: SpoonacularService
  ) {}

  ngOnInit() {
    this.ingredients = [];
  }

  ionViewDidEnter() {
    this.loadIngredients();
  }

  async loadIngredients() {
    this.authService.getUser()
        .pipe(
            map((userAuth) => {
              this.currentUser = userAuth;
              return doc(this.firestore, `users/${userAuth.uid}/fridges/fridge`);
            }),
            catchError(() => EMPTY)
        )
        .subscribe(
            async (fridgeDocRef) => {
              try {
                const ingredientsRef = collection(fridgeDocRef, 'ingredients');
                const ingredientsSnapshot = await getDocs(ingredientsRef);
                this.ingredients = ingredientsSnapshot.docs.map((doc) => {
                  const ingredient = doc.data();
                  return {
                    id: doc.id,
                    name: ingredient.name,
                    image: ingredient.image,
                  };
                });
              } catch (error) {
                console.log('Error loading ingredients:', error);
              }
            },
            (error) => {
              console.log('Error getting user:', error);
            }
        );
  }

    selectIngredients() {
        this.spoonacularService.searchIngredients(this.searchQuery).subscribe(
            (response: any) => {
                this.searchResults = response.results;
                this.searchResults.forEach((searchResult, index) => {
                    const foundIngredient = this.ingredients.find((ingredient) => ingredient.name === searchResult.name);
                    if (foundIngredient) {
                        this.searchResults.splice(index, 1);
                    }
                });
            },
            (error) => {
                console.log('Error searching ingredients:', error);
            }
        );
    }

    addIngredient(ingredientId: string, ingredientName: string, ingredientImage: string) {
        const ingredient = {
            id: ingredientId,
            name: ingredientName,
            image: 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientImage
        };
        const ingredientsCollection = collection(
            this.firestore,
            `users/${this.currentUser.uid}/fridges/fridge/ingredients`
        );
        addDoc(ingredientsCollection, ingredient).then(() => {
            this.loadIngredients();
        }).catch((error) => {
            console.log('Error adding ingredient:', error);
        });
    }

    async deleteIngredient(ingredientId: string) {
    const ingredientReference = doc(
        this.firestore,
        `users/${this.currentUser.uid}/fridges/fridge/ingredients/${ingredientId}`
    );
    await deleteDoc(ingredientReference);
    this.loadIngredients();
  }
}