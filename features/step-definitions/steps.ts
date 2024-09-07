import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await browser.maximizeWindow()
});

When(/^I login with '(.+?)' and '(.+)'$/, async (email, password) => {
    await LoginPage.login(email, password)
});

When(/^I makesure going to dashboard page$/, async () => {
    await LoginPage.verifyDashboard()
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));

});

