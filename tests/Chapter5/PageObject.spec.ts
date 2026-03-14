import { test, expect } from '@playwright/test'
import { HomePage } from '../../src/utils/pages/HomePage'
import { ResultPage } from '../../src/utils/pages/ResultPage';
import { PlaylistPage } from '../../src/utils/pages/PlayListPage';

test('Page Object Model Test in Playwright', async ({ page }) => {

    //Create object of homepage 
    const homepage = new HomePage(page);
    await homepage.goToURL();
    await homepage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of resultpage
    const resultpage = new ResultPage(page);
    await resultpage.clickOnPlayList(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of playlistpage 
    const playlistpage = new PlaylistPage(page);
    await playlistpage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`)
   
})