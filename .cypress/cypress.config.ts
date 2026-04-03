import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl,
    specPattern: 'e2e/**/*.cy.ts',
    supportFile: 'support/e2e.ts',
    chromeWebSecurity: false,
    video: false,
    screenshotsFolder: 'screenshots',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--ignore-certificate-errors');
        }
        return launchOptions;
      });

      return config;
    },
  },
});
