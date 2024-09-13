
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://web.facebook.com/?_rdc=1&_rdr');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByPlaceholder('First name').fill('Yinka Nathaniel');
  await page.getByLabel('Surname').click();
  await page.getByLabel('Surname').fill('Ojewole');
  await page.getByLabel('Mobile number or email address').click();
  await page.getByLabel('Mobile number or email address').fill('hevov26253@rogtat.com');
  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('anointed');
await page.locator("#day").selectOption({index: 11});
  await page.locator("#month").selectOption({label:'Nov'});
  await page.locator("#year").selectOption({index: 41});
  await page.locator('//label[normalize-space()="Female"]').check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.goto('https://web.facebook.com/confirmemail.php?next=https%3A%2F%2Fweb.facebook.com%2F&__req=d');
  await page.waitForTimeout(2000)

});



  

// FACEBOOK LOGIN
// await page.getByTestId('royal_email').click();
// await page.getByTestId('royal_email').fill('hevov26253@rogtat.com');
// await page.getByTestId('royal_pass').click();
// await page.getByTestId('royal_pass').fill('anointed');
// await page.getByTestId('royal_login_button').click();











 // const value = await page.locator("month").textcontent()