const { test, expect } = require('@playwright/test');
test ('Validate Login Scenario', async ({page}) =>{
 
await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx")
await page.getByLabel('Username').fill("Tester")
await page.getByLabel('Password').fill("test")
await page.locator("[type='submit']").click();
await expect(page.getByRole('heading', { name: 'List of All Orders' })).toHaveText("List of All Orders")
//await page.pause();
})