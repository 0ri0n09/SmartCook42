import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private storageKey = 'shoppingList';
  constructor() { }

  getShoppingList() {
    const list = localStorage.getItem('shoppingList');
    return list ? JSON.parse(list) : [];
  }

  addToShoppingList(ingredient) {
    const list = this.getShoppingList();
    list.push(ingredient);
    localStorage.setItem('shoppingList', JSON.stringify(list));
  }

  deleteOfShoppingList(itemId: string): void {
    const list = this.getShoppingList();
    const newList = list.filter(item => item.id !== itemId);
    localStorage.setItem(this.storageKey, JSON.stringify(newList));
  }
}
