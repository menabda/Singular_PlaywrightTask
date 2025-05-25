
import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashboardPage } from '../pages/dashboard-page';
import { CartPage } from '../pages/cart-page'
import { CheckoutPage } from '../pages/checkout-page'

const URL = 'https://www.saucedemo.com/'

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

test('Login, Add to cart, Pay', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('/inventory.html');
  await expect(page.locator('text=Swag Labs')).toBeVisible();
  const dashboard = new DashboardPage(page);
  await dashboard.addProductToCart();
  await expect(page.locator('.shopping_cart_badge')).toBeVisible();
  await dashboard.goToCart();
  await expect(page).toHaveURL('/cart.html');
  const cartPage = new CartPage(page);
  const name = await cartPage.checkName(); 
  await expect(name).toBe('Sauce Labs Backpack');
  await cartPage.proceedToCheckout();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillData();
  await expect(page).toHaveURL('/checkout-step-two.html')
  await checkoutPage.finalizeCheckout();
  await expect(page.locator('text=Thank you for your order!')).toBeVisible();
});

