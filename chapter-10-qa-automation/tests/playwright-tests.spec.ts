import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

/**
 * Chapter 10: QA Automation with Playwright using TypeScript
 * 
 * Playwright provides a reliable framework for end-to-end testing web applications.
 * Here we use TypeScript to strictly type our Page Objects and test fixtures.
 */

test.describe('DemoQA Login Tests', () => {

    let loginPage: LoginPage;

    // The 'beforeEach' hook runs before every test in this block
    test.beforeEach(async ({ page }) => {
        // Initialize our strongly typed Page Object Model
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Should display an error for an invalid user', async ({ page }) => {
        // Notice how TypeScript gives auto-completion for loginPage methods like 'login'
        await loginPage.login('invalidUser', 'WrongPassword123!');
        
        // Assert the error message appeared
        const errorMessage = loginPage.getErrorMessageLocator();
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Invalid username or password!');
    });

    // -------------------------------------------------------------
    // JAVASCRIPT COMPARISON
    // -------------------------------------------------------------
    /*
    In JS Playwright:
    test('Invalid login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(123, true); // No warning that username must be a string!
    });
    */

});
