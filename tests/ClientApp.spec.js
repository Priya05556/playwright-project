const {test,expect}=require('@playwright/test');

test('Browser cotext validating  Error login',async({page})=>{

    
 await page.goto("https //rahulshettyacademy.com/client/auth/login");
 await page.locator("#UserEmail").fill("priyadarsini0542@gmail.com");
 await page.locator("UserPassword").type("Iamqueen@000");
 await page.locator("[value='login']").Click();
// await page.waitForLoadState('networkIdle');
 await page.locator(".card-body b").first().waitFor();
 const titles= await page.locator(".card-body b").allTextContents();
  
 console.log(allTitles);
})