import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page, ChromiumBrowser } from '@playwright/test';

export class CustomWorld extends World {
  context?: BrowserContext;
  page?: Page;
  browser?: ChromiumBrowser;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
