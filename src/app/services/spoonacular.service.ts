import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiKey = '56525c6326e44e888035f4c90347c1e9';
  private apiUrl = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) { }

  searchRecipesByIngredients(ingredients: string, number: number = 10) {
    const url = `${this.apiUrl}/recipes/findByIngredients?apiKey=${this.apiKey}&ingredients=${ingredients}&number=${number}`;
    return this.http.get(url);
  }

  searchRecipes(query: string, number: number = 10, diet?: string, cuisine?: string, intolerances?: string, type?: string, occasion?: string) {
    let url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}&number=${number}`;
    if (diet) {
      url += `&diet=${diet}`;
    }
    if (cuisine) {
      url += `&cuisine=${cuisine}`;
    }
    if (intolerances) {
      url += `&intolerances=${intolerances}`;
    }
    if (type) {
      url += `&type=${type}`;
    }
    if (occasion) {
      url += `&occasion=${occasion}`;
    }
    return this.http.get(url);
  }

  getRecipeDetailsById(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getRandomRecipes(number: number = 10) {
    const url = `${this.apiUrl}/recipes/random?apiKey=${this.apiKey}&number=${number}`;
    return this.http.get(url);
  }

  searchIngredients(query: string, number: number = 10) {
    const url = `${this.apiUrl}/food/ingredients/search?apiKey=${this.apiKey}&query=${query}&number=${number}`;
    return this.http.get(url);
  }

  getSimilarRecipesById(id: number, number: number = 10) {
    const url = `${this.apiUrl}/recipes/${id}/similar?apiKey=${this.apiKey}&number=${number}`;
    return this.http.get(url);
  }

  getIngredientInfosbyId(id: number) {
    const url = `${this.apiUrl}/food/ingredients/${id}/information?amount1&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  sendChatMessage(message: string): Observable<any> {
    const url = 'https://api.spoonacular.com/food/converse';
    const params = {
      text: message,
      apiKey: this.apiKey
    };
    const options = {
      params: new HttpParams({ fromObject: params })
    };
    return this.http.get<any>(url, options);
  }

  getRestaurants(lat: string, lng: string, cuisine: string) {
    let url;
    if (cuisine) {
      url = `${this.apiUrl}/food/restaurants/search?cuisine=${encodeURIComponent(cuisine)}&lat=${lat}&lng=${lng}&distance=3.21371&apiKey=${this.apiKey}`;
    } else {
      url = `${this.apiUrl}/food/restaurants/search?lat=${lat}&lng=${lng}&apiKey=${this.apiKey}`;
    }
    return this.http.get(url);
  }
}