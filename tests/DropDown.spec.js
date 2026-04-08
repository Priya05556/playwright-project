const { expect } = require("@playwright/test");

test.only('UI controls', async ({page})=>{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const userName = page.locator('#userName');
 const signIn=page.locator("#signInBtn");
 const dropdown=page.locator("select.form-control");
 const dropdown.selectOption("consult");
 await page.locator(".radiotextsty").last().click();
 await page.locator("okayBtn").click();
 console.log(await page.locator(".radiotextsty").last().isChecked());
 expect(page.locator(".radiotextsty").last()).toBeChecked();

 //assertions
 await page.pause();

     
 })