import puppeteer, {Browser, Page} from 'puppeteer';

describe('just open', () => {
    let browser: Browser;
    let page: Page;

    beforeEach(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1280, height: 720}});
        page = (await browser.pages())[0];
    });

    afterEach(async () => {
        await browser?.close();
    });

    it('google', async () => {
        await page.goto('https://www.google.com');
        await page.screenshot({path: './test-output/google.png'});
    });
    it('bing', async () => {
        await page.goto('https://www.bing.com');
        await page.screenshot({path: './test-output/bing.png'});
    });

});
