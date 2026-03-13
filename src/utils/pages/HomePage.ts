import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page:Page;
    readonly searchTextbox : Locator;

    constructor(page:Page) {
        this.page = page;

            //Elements
        this.searchTextbox = page.locator('#input')
    }

    //Methods
    async goToURL(){
      await this.page.goto();
    }
    
}