const assert = require('assert');

describe('Homepage Tests', () => {
  it('should load the homepage and display the correct title', async () => {
    // Navigate to the website
    await browser.url('https://example.com');

    // Verify the page title
    const title = await browser.getTitle();
    assert.strictEqual(title, 'Expected Page Title', 'Example Domain');
  });
});
