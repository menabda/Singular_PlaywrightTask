import { type Page, type Locator, expect } from '@playwright/test';
export class CheckoutPage {

  readonly page: Page;
  readonly firstName : Locator;
  readonly lastname : Locator;
  readonly zip : Locator;
  readonly continueBtn : Locator;
  readonly finishBtn : Locator;


  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastname = page.locator('#last-name');
    this.zip = page.locator('[name="postalCode"]');
    this.continueBtn = page.locator('[name="continue"]');
    this.finishBtn = page.locator('#finish');
  }

  async fillData(){
    await this.firstName.fill('John');
    await this.lastname.fill('Doe');
    await this.zip.fill('19801');
    await this.continueBtn.click();
  }

  async finalizeCheckout() {
    await this.finishBtn.click();
  }
}

export default CheckoutPage;