import {Component, Injectable, OnInit} from '@angular/core';
import {addDoc, collection, deleteDoc, doc, Firestore, getDocs} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth.service';
import {ProfileService} from '../profile/profile.service';
import {catchError, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {User} from '@angular/fire/auth';
import {SpoonacularService} from "../../services/spoonacular.service";
import {ActionSheetController, AlertController, LoadingController, ToastController} from "@ionic/angular";
import {Camera} from '@ionic-native/camera/ngx';
import {HttpClient} from '@angular/common/http';
import {ListService} from "../../services/list.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Inject } from '@angular/core';

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
    allIngredients: any [];
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
        private actionSheetController: ActionSheetController,
        private toastController: ToastController,
        private listService: ListService,
        private router: Router,
        private route: ActivatedRoute,
        @Inject(Platform) private platform: Platform
    ) {
    }

    async showFeatureNotAvailableAlert() {
        const alert = await this.alertController.create({
            header: 'Not Available',
            message: 'Feature only available on the native application',
            buttons: ['OK']
        });
        await alert.present();
    }

    isNativeApp(): boolean {
        return this.platform.is('cordova');
    }

    async ngOnInit() {
        await this.loadAllIngredients();
        await this.presentLoading();
        this.ingredients = [];
        await this.loadIngredients();
        await this.loadingController.dismiss();
    }

    async saveToShoppingList(ingredient) {
        this.listService.addToShoppingList(ingredient);
        const toast = await this.toastController.create({
            message: 'The ingredient has been added successfully',
            duration: 2000,
            position: 'top',
            animated: true,
            color: 'success'
        });
        toast.present();
    }

    ionViewDidEnter() {
        this.loadIngredients();
    }

    async loadAllIngredients(): Promise<any> {
        try {
            this.allIngredients = await this.http.get<any>('assets/ingredients.json').toPromise();
        } catch (error) {
            console.error(error);
        }
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
        await new Promise((resolve) => setTimeout(resolve, 1400));
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

    async addIngredient(ingredientId: number, ingredientName: string, ingredientImage: string) {
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
            sourceType: this.camera.PictureSourceType.CAMERA,
        };

        try {
            const actionSheet = await this.actionSheetController.create({
                header: 'Select how you want to send your picture',
                buttons: [
                    {
                        text: 'Take a picture with your device',
                        handler: () => {
                            options.sourceType = this.camera.PictureSourceType.CAMERA;
                            this.getPicture(options);
                        }
                    },
                    {
                        text: 'Select a picture from your library',
                        handler: () => {
                            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                            this.getPicture(options);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            await actionSheet.present();
        } catch (error) {
            const alertError = await this.alertController.create({
                header: 'ERROR',
                message: JSON.stringify(error),
                buttons: ['OK'],
            });
            await alertError.present();
        }
    }

    async getPicture(options: CameraOptions) {
        try {
            await this.presentLoading();
            const imageData = await this.camera.getPicture(options);
            const visionAPIUrl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA';
            const visionAPIRequest = {
                requests: [
                    {
                        image: {
                            content: imageData,
                        },
                        features: [
                            {
                                type: 'LABEL_DETECTION',
                                maxResults: 20,
                            },
                        ],
                    },
                ],
            };
            const response: any = await this.http.post<any>(visionAPIUrl, visionAPIRequest).toPromise();
            const labels = response.responses[0].labelAnnotations;
            const descriptions = labels.map((label: any) => label.description.toLowerCase());
            const jsonListIngredients = await this.http.get<any[]>('/assets/ingredients.json').toPromise();
            const uniqueIngredients: { [key: string]: boolean } = {};
            let ingredientFound = false;
            for (const description of descriptions) {
                const match = jsonListIngredients.find((item) => item.name === description);
                if (match) {
                    try {
                        const response = await this.spoonacularService.getIngredientInfosbyId(match.id).toPromise();
                        const responseFiltered: {
                            id: number;
                            name: string;
                            image: string;
                        } = response as {
                            id: number;
                            name: string;
                            image: string;
                        };
                        ingredientFound = true;
                        const ingredient = {
                            id: responseFiltered.id,
                            name: responseFiltered.name,
                            image: responseFiltered.image
                        };
                        const ingredientKey = JSON.stringify(ingredient);
                        if (!uniqueIngredients[ingredientKey]) {
                            uniqueIngredients[ingredientKey] = true;
                            const existingIngredient = this.ingredients.find((i) => i.id === ingredient.id);
                            if (!existingIngredient) {
                                await this.addIngredient(ingredient.id, ingredient.name, ingredient.image);
                            }
                        }
                    } catch (error) {
                        console.error('Error getting ingredient:', error);
                        const alert = await this.alertController.create({
                            header: 'Error getting ingredient',
                            message: error,
                            buttons: ['OK'],
                        });
                        await alert.present();
                    }
                }
            }
            if (ingredientFound) {
                const toast = await this.toastController.create({
                    message: 'The ingredient(s) has been added successfully',
                    duration: 2000,
                    position: 'top',
                    animated: true,
                    color: 'success'
                });
                toast.present();
            } else {
                const toast = await this.toastController.create({
                    message: 'No ingredient(s) found in the picture',
                    duration: 2000,
                    position: 'top',
                    animated: true,
                    color: 'danger'
                });
                toast.present();
            }
            await this.loadIngredients();
            await this.loadingController.dismiss();
        } catch (error) {
            const alertError = await this.alertController.create({
                header: 'ERROR VISION API',
                message: JSON.stringify(error),
                buttons: ['OK'],
            });
            await alertError.present();
        }
    }

    isInShoppingList(ingredientId: any): boolean {
        return this.listService.isInShoppingList(ingredientId);
    }

    searchRecipesWithFridgeIngredients() {
        const ingredientNames = this.ingredients.map(ingredient => ingredient.name);
        const ingredients = JSON.stringify(ingredientNames);
        this.router.navigate(['/search'], { queryParams: { ingredients: ingredients, commingFromFoodPage: true } });
    }
}