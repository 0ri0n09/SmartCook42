import {Component, OnInit} from '@angular/core';
import {SpoonacularService} from "../../services/spoonacular.service";
import {LoadingController, ToastController} from "@ionic/angular";

interface Restaurant {
    offers_third_party_delivery: boolean;
    address: {
        zipcode: string;
        country: string;
        city: string;
        latitude: number;
        lon: number;
        street_addr_2: string;
        state: string;
        street_addr: string;
        lat: number;
        longitude: number;
    };
    supports_upc_codes: boolean;
    is_open: boolean;
    description: string;
    weighted_rating_value: number;
    type: string;
    offers_first_party_delivery: boolean;
    aggregated_rating_count: number;
    store_photos: string[];
    logo_photos: string[];
    pickup_enabled: boolean;
    cuisines: string[];
    miles: number;
    dollar_signs: number;
    delivery_enabled: boolean;
    food_photos: string[];
    name: string;
    phone_number: number;
    _id: string;
    local_hours: {
        operational: Record<string, string>;
        delivery: Record<string, string>;
        pickup: Record<string, string>;
        dine_in: Record<string, string>;
    };
}

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.page.html',
    styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
    restaurants: Restaurant[];
    cuisine: string;
    constructor(
        private spoonacularService: SpoonacularService,
        private loadingController: LoadingController,
        private toastController: ToastController,
    ) {
    }

    ngOnInit() {
        this.cuisine = "";
        this.restaurants = [];
        this.getCurrentLocation();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Finding restaurants...',
        });
        await loading.present();
    }

    clearSearch() {
        this.restaurants = [];
    }

    getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude.toString());
                    console.log(position.coords.longitude.toString());
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    async getRestaurants() {
        await this.presentLoading();
        this.spoonacularService.getRestaurants(
            "40.71263519694495",
            "-74.04429775127",
            this.cuisine
        ).subscribe(
            async (data: { restaurants: Restaurant[] }) => {
                this.restaurants = data.restaurants;
                const toast = await this.toastController.create({
                    message: 'Searching restaurant done :)',
                    duration: 2000,
                    position: 'top',
                    animated: true,
                    color: 'success'
                });
                await toast.present();
                await this.loadingController.dismiss();
            },
            async (error) => {
                console.log(error);
                const toast = await this.toastController.create({
                    message: error,
                    duration: 2000,
                    position: 'top',
                    animated: true,
                    color: 'danger'
                });
                await toast.present();
                await this.loadingController.dismiss();
            }
        );
    }

    openGoogleMap(restaurant: any) {
        const latitude = restaurant.address.latitude;
        const longitude = restaurant.address.longitude;
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, '_blank');
    }
}
