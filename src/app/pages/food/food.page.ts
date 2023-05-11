import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {Firestore, deleteDoc, doc, getDocs, collection, addDoc} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth.service';
import {ProfileService} from '../profile/profile.service';
import {catchError, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {User} from '@angular/fire/auth';
import {SpoonacularService} from "../../services/spoonacular.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ToastController} from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    encodingType?: number;
    mediaType?: number;
    allowEdit?: boolean;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    cameraDirection?: number;
}

@Injectable({
    providedIn:'root'
})

@NgModule({
    providers: [
        Camera,
    ],
})
export class AppModule {
}

@Component({
    selector: 'app-food',
    templateUrl: './food.page.html',
    styleUrls: ['./food.page.scss'],
    providers: [Camera]
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
        private spoonacularService: SpoonacularService,
        private loadingController: LoadingController,
        private alertController: AlertController,
        private camera: Camera,
        private toastController: ToastController
    ) {
    }

    async ngOnInit() {
        await this.presentLoading();
        this.ingredients = [];
        await this.loadIngredients();
        await this.loadingController.dismiss();
    }

    ionViewDidEnter() {
        this.loadIngredients();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Loading ingredients...',
        });
        await loading.present();
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

    async selectIngredients() {
        await this.presentLoading();
        this.spoonacularService.searchIngredients(this.searchQuery).subscribe(
            async (response: any) => {
                this.searchResults = response.results;
                this.searchResults.forEach((searchResult, index) => {
                    const foundIngredient = this.ingredients.find(
                        (ingredient) => ingredient.name === searchResult.name
                    );
                    if (foundIngredient) {
                        this.searchResults.splice(index, 1);
                    }
                });
                await this.loadingController.dismiss();
            },
            async (error) => {
                console.log('Error searching ingredients:', error);
                await this.loadingController.dismiss();
            }
        );
    }

    async addIngredient(ingredientId: string, ingredientName: string, ingredientImage: string) {
        const ingredient = {
            id: ingredientId,
            name: ingredientName,
            image: 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientImage
        };
        const ingredientsCollection = collection(
            this.firestore,
            `users/${this.currentUser.uid}/fridges/fridge/ingredients`
        );
        try {
            await addDoc(ingredientsCollection, ingredient);
            const index = this.searchResults.findIndex((result) => result.id === ingredientId);
            if (index !== -1) {
                this.searchResults = this.searchResults.filter((result) => result.id !== ingredientId);
            }
            this.loadIngredients();
            const toast = await this.toastController.create({
                message: 'The ingredient has been added successfully',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'success'
            });
            toast.present();
        } catch (error) {
            console.log('Error adding ingredient:', error);
        }
    }

    async deleteIngredient(ingredientId: string) {
        const ingredientReference = doc(
            this.firestore,
            `users/${this.currentUser.uid}/fridges/fridge/ingredients/${ingredientId}`
        );
        try {
            await deleteDoc(ingredientReference);
            const toast = await this.toastController.create({
                message: 'The ingredient has been removed successfully',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'danger'
            });
            toast.present();
        } catch (error) {
            console.log('Error adding ingredient:', error);
        }
        this.loadIngredients();
    }

    async addIngredientsWithPicture() {
        try {
            const imagePath = 'assets/imgs/frigo.jpg';

            const response = await fetch(imagePath);
            if (!response.ok) {
                throw new Error('Erreur lors du chargement de l\'image');
            }

            const blob = await response.blob();
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;

                const apiKey = 'AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA';
                const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
                const requestBody = {
                    requests: [
                        {
                            image: {
                                content: imageData,
                            },
                            features: [
                                {
                                    type: 'LABEL_DETECTION',
                                    maxResults: 10,
                                },
                            ],
                        },
                    ],
                };
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Erreur lors de l\'appel à l\'API Google Cloud Vision');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        const labels = data.responses[0].labelAnnotations;
                        labels.forEach((label) => {
                            console.log(data);
                            console.log(label.description);
                        });
                    })
                    .catch((error) => {
                        console.error('Erreur :', error);
                    });
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            console.error('Erreur :', error);
        }
    }
}