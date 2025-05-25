import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly userName: Locator;
  readonly loginButton: Locator;
  readonly password: Locator;
  readonly messagePanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByPlaceholder('Username'); 
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByText('Login', { exact: true });
    
  }


  async login(username: string, password: string) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

}

export default LoginPage;
