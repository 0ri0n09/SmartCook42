import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { SpoonacularService } from "../../services/spoonacular.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild(AuthFormComponent)
  signupForm: AuthFormComponent;
  constructor(private authService: AuthService, private firestore: Firestore, private router: Router, private spoonacularService: SpoonacularService) {}

  ngOnInit() {}

  async signupUser(credentials: UserCredential): Promise<void> {
    try {
      const user = await this.authService.signup(credentials.email, credentials.password);
      this.authService.userId = user.uid;
      await this.signupForm.hideLoading();

      const userReference = doc(this.firestore, `users/${user.uid}`);
      // Créer un frigo pour le nouvel utilisateur
      const fridgeReference = doc(this.firestore, `users/${user.uid}/fridges/fridge`);
      await setDoc(fridgeReference, {
        id_user: user.uid,
      });

      // Rechercher les informations de l'ingrédient "tomato" depuis l'API Spoonacular
      const response: any = await this.spoonacularService.searchIngredients('tomato', 1).toPromise();

      // Vérifier si la réponse contient des résultats
      if (response && response.results && response.results.length > 0) {
        const tomatoIngredient = response.results[0];

        // Ajouter les informations de l'ingrédient "tomato" au frigo
        const ingredientReference = doc(this.firestore, `users/${user.uid}/fridges/fridge/ingredients/${tomatoIngredient.id}`);
        await setDoc(ingredientReference, {
          id: tomatoIngredient.id,
          name: tomatoIngredient.name,
          image: 'https://spoonacular.com/cdn/ingredients_100x100/' + tomatoIngredient.image,
        });
      }
      this.router.navigateByUrl('home');
    } catch (error) {
      await this.signupForm.hideLoading();
      this.signupForm.handleError(error);
    }
  }
}
