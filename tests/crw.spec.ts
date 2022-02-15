import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('Login to the codeReady workspaces dashboard', async ({ page }) => {
        await page.goto('https://codeready-crw-crwctl.apps.ocp49.crw-qe.com/dashboard/');
        await page.click('a[title="Log in with htpasswd"]');
        const content = await page.textContent('//h1[text()="Log in to your account"]');
        expect(content).toBe('Log in to your account');
        await page.fill('#inputUsername', 'admin');
        await page.fill('#inputPassword', 'crw4ever!');
        await page.click('button[type="submit"]');
        await expect(page.locator('[src="./assets/branding/che-logo.svg"]')).toBeVisible();
    });
});