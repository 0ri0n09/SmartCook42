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
import {Camera} from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';

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
    providedIn: 'root'
})

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
        private http: HttpClient,
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
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        try {
            const imageData = await this.camera.getPicture(options);
            const base64Image = 'data:image/jpeg;base64,' + imageData;

            const visionAPIUrl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA';
            // Afficher une fenêtre contextuelle (popup) avec l'image base64
            const alert = await this.alertController.create({
                header: 'Image Captured',
                message: '<img src="' + base64Image + '">',
                buttons: ['OK']
            });

            await alert.present();
            const visionAPIRequest = {
                requests: [
                    {
                        image: {
                            content: base64Image,
                        },
                        features: [
                            {
                                type: 'LABEL_DETECTION',
                                maxResults: 5,
                            },
                        ],
                    },
                ],
            };
            const response: any = await this.http.post<any>(visionAPIUrl, visionAPIRequest).toPromise();
            console.log(response);
            const labels = response.responses[0].labelAnnotations;
            console.log(labels);
        } catch (error) {
            console.log(error);
        }
    }
}
