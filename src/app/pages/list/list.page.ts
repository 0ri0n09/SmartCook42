import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ToastController} from '@ionic/angular';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  ingredients: any;
  searchQuery: string;
  searchResults: any[];

  constructor(private listService: ListService,
              private toastController: ToastController){}

  ngOnInit() {
    this.ingredients = this.listService.getShoppingList();
  }

  ionViewDidEnter() {
    this.loadShoppingList();
  }

  loadShoppingList() {
    this.ingredients = this.listService.getShoppingList();
  }

  async deleteFromShoppingList(ingredientId: string) {
    this.listService.deleteOfShoppingList(ingredientId);
    this.ingredients = this.listService.getShoppingList();
    const toast = await this.toastController.create({
      message: 'The ingredient has been removed successfully',
      duration: 2000,
      position: 'top',
      animated: true,
      color: 'danger'
    });
    toast.present();
  }
}
