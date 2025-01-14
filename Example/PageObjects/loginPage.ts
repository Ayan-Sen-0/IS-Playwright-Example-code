import { Page } from "@playwright/test";
import { loginData } from "../Fixtures/loginData";

export class loginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Method to perform login
     * @param username Username/Email used for login
     * @param password Password used for login
     */
    async login(username: string, password: string) {
        // fill the username
        await this.page.getByPlaceholder(loginData.elements.emailFieldPlaceholderText).fill(username);
        // fill in the password 
        await this.page.getByPlaceholder(loginData.elements.passwordFieldPlaceholderText).fill(password);
        // click on sign-in button
        await this.page.locator(loginData.elements.signInButtonXpath).click()
    }
}