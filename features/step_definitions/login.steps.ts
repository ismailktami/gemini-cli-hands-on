import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
    await this.page?.goto('https://www.saucedemo.com/');
});

When('I login with {string} and {string}', async function (this: CustomWorld, username, password) {
    await this.page?.locator('[data-test="username"]').fill(username);
    await this.page?.locator('[data-test="password"]').fill(password);
    await this.page?.locator('[data-test="login-button"]').click();
});

Then('I should be on the inventory page', async function (this: CustomWorld) {
    await expect(this.page!).toHaveURL(/.*inventory.html/);
});

When('I logout', async function (this: CustomWorld) {
    await this.page?.getByRole('button', { name: 'Open Menu' }).click();
    await this.page?.locator('[data-test="logout-sidebar-link"]').waitFor({ state: 'visible' });
    await this.page?.locator('[data-test="logout-sidebar-link"]').click();
});

Then('I should be on the login page', async function (this: CustomWorld) {
    await expect(this.page!).toHaveURL('https://www.saucedemo.com/');
});
