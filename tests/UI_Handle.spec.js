const {test,expect} = require('@playwright/test');
 

test.only('9th Playwright test', async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("title = " +await page.title());
    const password = page.locator('#password');
    const signIn = page.locator("#signInBtn");
    await page.locator("select.form-control").selectOption("teach");
   await page.pause();
});

test('Second Playwright test', async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://google.com");
});