import { test, expect } from '@playwright/test';

test.describe('Webskit Insights - Core Funnel', () => {
    test('Homepage renders branding correctly', async ({ page }) => {
        // Navigate to the root homepage
        await page.goto('/');

        // Verify the "Webskit Insights" branding exists in the Document Object Model
        await expect(page.getByText('Webskit Insights', { exact: false }).first()).toBeVisible();
    });

    test('Marketing navigation routes work properly', async ({ page }) => {
        await page.goto('/');

        // Click the 'Services' link in the global navbar
        await page.click('nav >> text=Services');

        // Verify the application router resolved correctly to the /services hash
        await expect(page).toHaveURL('/services');
    });

    test('Secure Authentication portal is publicly accessible', async ({ page }) => {
        await page.goto('/');

        // Locate and click the 'Portal Login' anchor tag
        await page.click('text=Portal Login');

        // Verify destination and explicit form elements
        await expect(page).toHaveURL('/login');
        await expect(page.locator('form')).toBeVisible();
        await expect(page.getByText('Secure Portal')).toBeVisible();
    });
});
