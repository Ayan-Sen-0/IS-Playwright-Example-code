import { test, expect } from '@playwright/test';
import { loginPage } from '../PageObjects/loginPage';
import { loginData } from '../Fixtures/loginData';

test.describe("Login test cases", () => {

  let LoginPage;

  test.beforeEach("Creating the instances of classes", async ({page}) => {
    LoginPage = new loginPage(page)
  })

  test("Login with bad username", async({page}) => {
    // visit the login page
    await page.goto('/')
    // perform the login
    await LoginPage.login(loginData.data.badUsername, loginData.data.badPassword)
    // verify the error message is visible on screen
    await expect(page.locator(`p:has-text('${loginData.data.invalidEmailOrPasswordErrorMessage}')`)).toBeTruthy();
  })
})
