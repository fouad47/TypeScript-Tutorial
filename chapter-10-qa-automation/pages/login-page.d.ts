import { Page, Locator } from '@playwright/test';
/**
 * Chapter 10: Playwright Page Object Model (POM)
 *
 * Page Object Models encapsulate page elements and logic.
 * Using TypeScript here gives us strong interfaces and types (like 'Page' and 'Locator').
 */
export declare class LoginPage {
    private readonly page;
    private readonly usernameInput;
    private readonly passwordInput;
    private readonly loginButton;
    private readonly errorMessage;
    constructor(page: Page);
    /**
     * Navigates to the DemoQA Login page.
     */
    navigate(): Promise<void>;
    /**
     * Performs a login action.
     * Types force the parameters to be strings.
     */
    login(username: string, password: string): Promise<void>;
    getErrorMessageLocator(): Locator;
}
//# sourceMappingURL=login-page.d.ts.map