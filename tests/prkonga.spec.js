// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.konga.com/');

// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://konga.com/');

  const searchbox = await page.getByRole('searchbox', { name: 'Search for products, brands' });
  

  // to be sure the logo is visible
  await expect(page.getByRole('link', { name: 'Smiling face of Konga logo.' })).toBeVisible();

  
// Click to search for a product
  await page.getByRole('searchbox').click();

  // Input the name of the product
  await page.getByRole('searchbox').fill('television');

// Input the name of the product
  await page.getByRole('button', { name: 'Search' }).click();

  // Click the get started link.
  await page.getByRole('link', { name: 'Hisense 43\'\' Smart Television Full HD/HDMI/USB/ Smart WiFi -TV 43 A4K .' }).click();

 
  // Click the get started link.
  await page.locator('div').filter({ hasText: /^Add To CartSave For Later$/ }).getByRole('button').click();

 // Click the Continue to Checkout .
 await page.getByRole('link', { name: 'Continue to Checkout' }).click();
 await page.waitForTimeout(5000)
});




// await page.locator("month").selectOption({label:'Apr'})
// await page.waitforTimeout(5000)
// const value = await page.locator("month").textcontent()