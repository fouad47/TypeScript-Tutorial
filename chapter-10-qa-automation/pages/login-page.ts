import { Page, Locator } from '@playwright/test';

/**
 * Chapter 10: Playwright Page Object Model (POM)
 * 
 * Page Object Models encapsulate page elements and logic.
 * Using TypeScript here gives us strong interfaces and types (like 'Page' and 'Locator').
 */
export class LoginPage {
    // 1. We strictly type our internal properties. 
    // 'page' must be a Playwright 'Page' object, not just any generic object.
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // 2. Initialize selectors
        this.usernameInput = page.locator('#userName');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.errorMessage = page.locator('#name'); // DemoQA places errors here currently
    }

    /**
     * Navigates to the DemoQA Login page.
     */
    public async navigate(): Promise<void> {
        await this.page.goto('https://demoqa.com/login');
    }

    /**
     * Performs a login action. 
     * Types force the parameters to be strings.
     */
    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public getErrorMessageLocator(): Locator {
        return this.errorMessage;
    }
}
