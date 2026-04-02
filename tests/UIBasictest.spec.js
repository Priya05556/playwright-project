const {test,expect}=require('@playwright/test');

test('Browser cotext validating  Error login',async({browser})=>
{
    
const context = await browser.newContext();
const page =await context.newPage();
const userName=page.locator('#username');
const signIn=page.locator('#signInBtn');

await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
console.log(await page.title()); 
//css , xpath
await userName.type("rahulshetty");
await page.locator("[type='password']").type("learning"); 
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//type-fill
await userName.fill();
await userName.fill("rahulshettyacademy");

});


test('Page  playwright test',async({page})=>
{

await page.goto("https://www.google.com/"); 
console.log(await page.title());  
await expect(page).toHaveTitle("Google");
});