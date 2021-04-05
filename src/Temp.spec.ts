import puppeteer, {Browser, Page} from 'puppeteer';
import { addAttach } from 'jest-html-reporters/helper';

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
        const buffer = await page.screenshot({path: './test-output/google.png'});
        await addAttach(buffer, "google");

    });

    it('bing', async () => {
        await page.goto('https://www.bing.com');
        const buffer = await page.screenshot({path: './test-output/bing.png'});
        await addAttach(buffer, "bing");
    });

    it('duckduckgo', async () => {
        await page.goto('https://duckduckgo.com');
        const buffer = await page.screenshot({path: './test-output/duckduckgo.png'});
        await addAttach(buffer, "duckduckgo");


        const cdpSession = await page.target().createCDPSession();
        const send = await cdpSession.send('Browser.getVersion');
        console.log(send);
        const send1 = await cdpSession.send('Browser.getWindowForTarget');
        console.log(send1);
    });

});
