import { Injectable } from '@angular/core';
import {ListItem} from "../models/list-item";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private storageKey = 'shoppingList';
  constructor() { }

  getShoppingList(): ListItem[] {
    const list = localStorage.getItem(this.storageKey);
    return list ? JSON.parse(list) : [];
  }

  addItem(item: ListItem): void {
    const list = this.getShoppingList();
    list.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  updateItem(item: ListItem): void {
    const list = this.getShoppingList();
    const index = list.findIndex(i => i.id === item.id);

    if (index !== -1) {
      list[index] = item;
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    }
  }

  deleteItem(itemId: string): void {
    const list = this.getShoppingList();
    const newList = list.filter(item => item.id !== itemId);
    localStorage.setItem(this.storageKey, JSON.stringify(newList));
  }
}
