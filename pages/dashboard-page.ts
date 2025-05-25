import { type Page, type Locator, expect } from '@playwright/test';

export class DashboardPage{
    
    readonly page: Page;
    readonly products: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToBasketButton: Locator;
     readonly addToBasketButton2: Locator;
    readonly basketIcon: Locator;

    constructor(page:Page){
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.productName = page.locator('.inventory_item_name');
        this.productPrice = page.locator('.inventory_item_price');
        this.addToBasketButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addToBasketButton2 = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');      
        this.basketIcon = page.locator('.shopping_cart_link');
    }

    async addProductToCart() {
      await this.addToBasketButton.click();
      await this.addToBasketButton2.click();
    }


    async goToCart() {
      await this.basketIcon.click(); 
    }
  
}