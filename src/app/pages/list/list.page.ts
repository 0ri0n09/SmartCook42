import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { ListService } from '../../services/list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  shoppingList: ListItem[];
  newItemName: string;
  newItemQuantity: number;

  constructor(private listService: ListService,
              private alertController: AlertController) {
    this.loadShoppingList();
  }

  ngOnInit() {}

  loadShoppingList(): void {
    this.shoppingList = this.listService.getShoppingList();
  }

  addItem(item: ListItem): void {
    this.listService.addItem(item);
    this.loadShoppingList();
  }

  updateItem(item: ListItem): void {
    this.listService.updateItem(item);
    this.loadShoppingList();
  }

  deleteItem(itemId: string): void {
    this.listService.deleteItem(itemId);
    this.loadShoppingList();
  }

  async addNewItem(name: string, quantity: number): Promise<void> {
    if (!name || !quantity) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'A product must have a name and a quantity.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const newItem: ListItem = {
      id: Date.now().toString(),
      name: name,
      quantity: quantity,
      isChecked: false,
    };
    this.addItem(newItem);
    this.newItemName = '';
    this.newItemQuantity = null;
  }
}
