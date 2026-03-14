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
      await this.page.goto('https://www.google.com/');  //It's better to fetch this from Env file
    }

    async searchWithKeywords(keyword:string) {
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.fill('Enter');
    }
    
}