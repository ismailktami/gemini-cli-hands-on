import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('the title should contain {string}', async function (this: CustomWorld, title: string) {
    const pageTitle = await this.page?.title();
    expect(pageTitle).toContain(title);
});
