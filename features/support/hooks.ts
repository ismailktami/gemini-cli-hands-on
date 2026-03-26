import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, ChromiumBrowser } from '@playwright/test';
import { CustomWorld } from './world';

let browser: ChromiumBrowser;

setDefaultTimeout(60000);

BeforeAll(async () => {
    browser = await chromium.launch({ headless: true });
});

Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
    await this.page?.close();
    await this.context?.close();
});

AfterAll(async () => {
    await browser.close();
});
