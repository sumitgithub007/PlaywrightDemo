const {test,expect} = require('@playwright/test');
 

test.only('9th Playwright test', async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
    const productName = "IPHONE 13 PRO";
    const products = page.locator("div.card-body");
   let   country = page.locator(".ta-results.list-group.ng-star-inserted");
   let   countrylists = page.locator(".ta-results.list-group.ng-star-inserted span");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("input[type='email']").fill("goyalsumit319@gmail.com");
    await page.locator("input[type='password']").fill("Subh@1987#!");
    await page.locator("text=Login").click();
    await page.waitForLoadState('networkidle');
    const count = await products.count();
    for(let i=0;i<count;++i)
    {
          if(await  products.nth(i).locator("b").textContent()===productName.toLowerCase())
          {
            await products.nth(i).locator("text = Add to Cart").click();
            break;
          }
    } //
    await page.locator("//*[contains(text(),'Cart')]").nth(0).click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator(".btn.btn-primary >> nth=-1").click();
    await page.locator("//*[contains(text(),'Credit Card Number')]/following-sibling::input").fill("4242424242424242");
    await page.locator(".input.ddl").first().selectOption("07");
    await page.locator(".input.ddl").last().selectOption("23");
    await page.locator("input[placeholder='Select Country']").type("ind ",{delay:1200});
    await countrylists.first().waitFor();
    const country_Count=await countrylists.count();
    console.log("country count = "+country_Count);
    for(let j=0;j<country_Count;++j)
    {
        console.log(await countrylists.nth(j).textContent());
        let text = await countrylists.nth(j).textContent();
        if(text.trim()==="India")
        {
            await countrylists.nth(j).click();
            break;
        }
    }

    await page.locator("text=PLACE ORDER").click();
    const order_id = await page.locator("tr.ng-star-inserted").first().textContent();
    console.log("ORDER ID IS = "+order_id);
    await page.locator("button[routerlink*='orders']").click();//added
    
    await page.locator("tr:below(:text('Product Image'))").first().waitFor();
  const orderids=    page.locator("tr:below(:text('Product Image'))");
  const actualorderids = orderids.locator("th");

  console.log("TOTAL COUNT ===== "+ await actualorderids.count() );
  for(let k=0;k<await actualorderids.count();++k)
  {
     console.log("order_id" + (k+1) + "="+ await actualorderids.nth(k).textContent());
     if(order_id.includes(await actualorderids.nth(k).textContent()))
     {
      await orderids.nth(k).locator("text=View").click();
      break;
     }
  }

   
    await page.pause(); 


});

 