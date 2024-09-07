import { expect,$,browser } from '@wdio/globals'
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('//*[@id="email"]');
    }

    public get nextPassword () {
        return $('//*[@id="next"]')
    }

    public get inputPassword () {
        return $('//*[@id="password"]');
    }

    public get btnSubmit () {
        return $('//*[@id="signin"]');
    }

    public get sidebarDashboard () {
        return $('//*[@id="main-navigation"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.nextPassword.click()
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async verifyDashboard(){
        await this.sidebarDashboard.isDisplayed()
        await browser.pause(10000)
        await expect(browser).toHaveUrl('https://app.clio.com/nc/#/')
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
