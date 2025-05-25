import { type Page, type Locator, expect } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly productName : Locator;
  readonly checkoutBtn : Locator;


  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator('.inventory_item_name');
    this.checkoutBtn = page.locator('#checkout')
  }

  async checkName(){
    return this.productName.first().textContent();
  }

  async proceedToCheckout() {
    
    await this.checkoutBtn.click();
  }
}

export default CartPage;