const {test,expect} = require('@playwright/test');
 

test.only('First Playwright test', async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("title = " +await page.title());
    const password = page.locator('#password');
    const signIn = page.locator("#signInBtn");
   // await expect(page).toHaveTitle('Google');
    await  page.locator("//input").first().type("rahulshettyacademy");
    await  password.type("learning");
    await signIn.click();
  // console.log("Text message is = " +await  page.locator(".alert.alert-danger.col-md-12").textContent());
   //await expect(page.locator('.alert.alert-danger.col-md-12')).toContainText('Empty usernajme/password.');
   await Promise.all([
     
    page.waitForNavigation(),
     
    signIn.click(),
  ]);
  console.log(await page.locator('.card-body a').allTextContents());
  
});

test('Second Playwright test', async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://google.com");
});