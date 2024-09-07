import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import dahsboard from '../pageobjects/create';

When(/^as user, i can click contact on sidebar$/, async () => {
    await dahsboard.clickContact()
});

When(/^as user, i can click button new company$/, async () => {
    await dahsboard.clickNewCompany()
});

When(/^as user, i can fill '(.+?)' on name field$/, async (name) => {
    await dahsboard.fillName(name)
});

When(/^as user, i can fill '(.+?)' on email field$/, async (email) => {
    await dahsboard.fillEmail(email)
});

When(/^as user, i can fill '(.+?)' on phone field$/, async (phone) => {
    await dahsboard.fillPhone(phone)
});

When(/^as user, i can fill '(.+?)' on website field$/, async (website) => {
    await dahsboard.fillWebsite(website)
});

When(/^as user, i can fill '(.+?)' on street field$/, async (street) => {
    await dahsboard.fillStreet(street)
});

When(/^as user, i can fill '(.+?)' on city field$/, async (city) => {
    await dahsboard.fillCity(city)
});

When(/^as user, i can fill '(.+?)' on zip or postal code field$/, async (zip) => {
    await dahsboard.fillZip(zip)
});
When(/^as user, i can fill '(.+?)' on state field$/, async (state) => {
    await dahsboard.fillState(state)
});

When(/^as user, i can fill '(.+?)' on country$/, async (country) => {
    await dahsboard.fillCountry(country)
});

When(/^as user, i can click button save contact$/, async () => {
    await dahsboard.clickSave()
});

Then(/^as user, i can see contact information what data i create before$/, async () => {
    await dahsboard.verifyContactInformation()
});

//======================

When(/^as user, i can click matters on sidebar$/, async () => {
    await dahsboard.clickMatters()
});

When(/^as user, i can click button new matters$/, async () => {
    await dahsboard.clickNewMatters()
});

When(/^as user, i can click dropdown arrow client$/, async () => {
    await dahsboard.clickDropdownClient()
});

When(/^as user, i can choose syauqitestbaru client$/, async () => {
    await dahsboard.clickValueDropdown()
});

When(/^as user, i can fill '(.+?)' on matter description$/, async (description) => {
    await dahsboard.inputValueDescription(description)
});

When(/^as user, i can choose everyone on radio button film users with access$/, async () => {
    await dahsboard.chooseRadioButtonFirm()
});

When(/^as user, i can click button save$/, async () => {
    await dahsboard.clickSaveMatters()
});

Then(/^as user, i can see matter what i create before$/, async () => {
    await dahsboard.verifyMatter()
});

//=====================================

When(/^as user, i can click Tasks on sidebar$/, async () => {
    await dahsboard.clickSide_Tasks()
});

When(/^as user, i can click button new task$/, async () => {
    await dahsboard.clickBtnTask()
});

When(/^as user, i can fill '(.+?)' on name$/, async (nama) => {
    await dahsboard.inputNameTask(nama)
});

When(/^as user, i can click button save on task popup$/, async () => {
    await dahsboard.clickBtnSaveTask()
});

Then(/^as user, i can see task what i create before$/, async () => {
    await dahsboard.verifyTasks()
});

//==========================================

When(/^as user, i can click button timekeeper to start$/, async () => {
    await dahsboard.startTime()
});

When(/^as user, i can click button timekeeper to end$/, async () => {
    await dahsboard.endTime()
});

When(/^as user, i can fill '(.+?)' on matter$/, async (matter) => {
    await dahsboard.inputMatters(matter)
});

When(/^as user, i can click button save entry$/, async () => {
    await dahsboard.clickBtn_SaveEntry()
});

When(/^as user, i can see notification successfully save$/, async () => {
    await dahsboard.verifySaveEntry()
});