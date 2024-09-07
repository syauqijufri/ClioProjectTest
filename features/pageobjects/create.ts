import { expect,$,browser } from '@wdio/globals'
import Page from './page';


class dashboard extends Page {

    public get sideBar_contact () {
        return $('//*[@id="main-navigation"]/ul[1]/li[5]/a');
    }

    public get btn_NewCompany () {
        return $('//*[@id="main-content"]/cc-contacts/cc-page-header/div/div[2]/cc-page-header-right/th-button[2]/button/ng-transclude/span');
    }

    public get inputName () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/div/span/th-row/th-column/label/span[2]/input');
    }

    public get inputEmail () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-email-fields/ng-transclude/div[1]/span/th-row/th-column[1]/label/span[2]/input');
    }

    public get inputPhone () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-phone-number-fields/ng-transclude/div[1]/span/th-row/th-column[1]/label/span[2]/input');
    }

    public get inputWebsite () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-web-site-fields/ng-transclude/div[1]/span/th-row/th-column[1]/label/span[2]/input');
    }

    public get inputStreet () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-address-fields/div[1]/span/th-row/th-column[1]/label/th-textarea/textarea');
    }

    public get inputCity () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-address-fields/div[1]/span/th-row/th-column[2]/span[1]/th-row/th-column[1]/label/span[2]/input');
    }

    public get inputZip () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-address-fields/div[1]/span/th-row/th-column[2]/span[2]/th-row/th-column[1]/label/span[2]/input');
    }

    public get inputState () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-body/ng-transclude/form/th-card[1]/section/div[2]/div/th-card-content/cc-address-fields/div[1]/span/th-row/th-column[2]/span[1]/th-row/th-column[2]/label/span[2]/input');
    }

    public get inputCountry () {
        return $('//span[@class="k-dropdown-wrap k-state-default"]//input[@name="country-combobox_input"]');
    }

    public get btn_save () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/contact-modal/th-modal-footer/div/span/th-row/th-column[1]/th-button-group/th-button[1]/button');
    }

    public get contactInformationSection () {
        return $('//*[@id="dashboard-tab"]/cc-page-content/div');
    }

    public get sideBar_matters () {
        return $('//*[@id="main-navigation"]/ul[1]/li[4]/a');
    }

    public get btn_newMatters () {
        return $('//*[@id="matters-index"]/ul/div/th-tab-action-bar/th-button[2]/button/ng-transclude/span');
    }

    public get inputClientDropdown () {
        return $('//*[@id="matter_details"]/ng-form/section/cc-contact-field/div/label/th-combobox/span/span/span/span[2]');
    }

    public get valueClientDropdown () {
        return $('/html/body/div[12]/div/div[2]/ul/li[3]/div');
    }

    public get inputDescription () {
        return $('//*[@id="matter_details"]/ng-form/section/label/th-textarea/textarea');
    }

    public get radioBtn_firm () {
        return $('//*[@id="permission-radio"]/label[1]/span[2]');
    }

    public get saveBtn_matters () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/cc-matter-create-modal/matter-modal/th-full-page-modal/div/div[1]/th-modal-full-page-titlebar/div[2]/ng-transclude/div/th-button-group/th-button[1]/button/ng-transclude/span');
    }
    
    public get dashboard_Matters () {
        return $('//*[@id="matter-details-container"]/cc-page-header/div[1]');
    }

    public get sidemenu_tasks () {
        return $('//*[@id="main-navigation"]/ul[1]/li[3]/a');
    }

    public get btn_newtask () {
        return $('//*[@id="main-content"]/cc-tasks/cc-page-header/div/div[2]/cc-page-header-right/th-button[4]/button/ng-transclude/span');
    }

    public get inputNama_task () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/cc-create-task-modal/cc-task-modal/th-modal-body/ng-transclude/form/span[1]/th-row/th-column[1]/label/span[2]/input');
    }

    public get btn_SaveTask () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/cc-create-task-modal/cc-task-modal/th-modal-footer/div/th-button-group/th-button[1]/button');
    }

    public get Tasks_body () {
        return $('//*[@id="main-content"]/cc-tasks/cc-page-content/div');
    }

    public get timeKepeer () {
        return $('//*[@id="apollo-app"]/div/div[2]/div/div[1]/header/ul/li[2]/cc-tk-widget/th-button-group/cc-tk-timer-button/button');
    }

    public get input_matter () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/cc-activities-time-entry-form/th-modal-body/ng-transclude/form/div/span[1]/th-row/th-column[2]/div/cc-matter-field/div/div/label/th-combobox/span/span/span/input')
    }

    public get valueDropdownMatter () {
        return $('/html/body/div[13]/div/div[2]/ul/li[3]');
    }

    public get btn_saveEntry () {
        return $('//*[@id="apollo-app"]/div/div[1]/div/div/div/div/cc-activities-time-entry-form/th-modal-footer/th-button-group[1]/th-button[1]/button');
    }


    public get successNotif () {
        return $('//*[@id="apollo-app"]/div/div[2]/div/div[2]/div[2]/cc-xero-two-factor-notifications');
    }


    public async clickContact(){
        await this.sideBar_contact.waitForClickable()
        await browser.pause(1000)
        await this.sideBar_contact.click()
    }

    
    public async clickNewCompany(){
        await this.btn_NewCompany.waitForClickable()
        await this.btn_NewCompany.click()
    }

    public async fillName(name){
        await this.inputName.waitForDisplayed()
        await this.inputName.setValue(name)
    }

    public async fillEmail(email){
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(email)
    }

    public async fillPhone(phone){
        await this.inputPhone.setValue(phone)
    }

    public async fillWebsite(website){
        await this.inputWebsite.setValue(website)
    }

    public async fillStreet(street){
        await this.inputStreet.setValue(street)
    }

    public async fillCity(city){
        await this.inputCity.setValue(city)
    }

    public async fillZip(zip){
        await this.inputZip.setValue(zip)
    }

    public async fillState(state){
        await this.inputState.setValue(state)
    }

    public async fillCountry(country){
        await this.inputCountry.setValue(country)
        await browser.keys('Enter')
    }

    public async clickSave(){
        await this.btn_save.click()
    }

    public async verifyContactInformation(){
        await this.contactInformationSection.isDisplayed()
    }

    public async clickMatters(){
        await this.sideBar_matters.waitForClickable()
        await this.sideBar_matters.click()
    }

    public async clickNewMatters(){
        await this.btn_newMatters.waitForClickable()
        await this.btn_newMatters.click()
    }

    public async clickDropdownClient(){
        await this.inputClientDropdown.waitForClickable()
        await this.inputClientDropdown.click()
    }

    public async clickValueDropdown(){
        await this.valueClientDropdown.waitForClickable()
        await this.valueClientDropdown.click()
    }

    public async inputValueDescription(description){
        await this.inputDescription.waitForDisplayed()
        await this.inputDescription.setValue(description)
    }

    public async chooseRadioButtonFirm(){
        await this.radioBtn_firm.waitForClickable()
        await this.radioBtn_firm.click()
    }

    public async clickSaveMatters(){
        await this.saveBtn_matters.waitForClickable()
        await this.saveBtn_matters.click()
    }

    public async verifyMatter(){
        await this.dashboard_Matters.isDisplayed()
    }

    public async clickSide_Tasks(){
        await this.sidemenu_tasks.isClickable()
        await this.sidemenu_tasks.click()
    }

    public async clickBtnTask(){
        await this.btn_newtask.isClickable()
        await this.btn_newtask.click()
    }

    public async inputNameTask(nama){
        await this.inputNama_task.waitForDisplayed()
        await this.inputNama_task.setValue(nama)
    }

    public async clickBtnSaveTask(){
        await browser.pause(2000)
        await this.btn_SaveTask.waitForClickable()
        await this.btn_SaveTask.click()
    }

    public async verifyTasks(){
        await this.Tasks_body.isDisplayed()
    }

    public async startTime(){
        await this.timeKepeer.waitForClickable()
        await this.timeKepeer.click()
    }

    public async endTime(){
        await browser.pause(5000)
        await this.timeKepeer.waitForClickable()
        await this.timeKepeer.click()
    }

    public async inputMatters(matter){
        await this.input_matter.waitForDisplayed()
        await this.input_matter.setValue(matter)
        await browser.keys('Enter')
    }

    public async clickBtn_SaveEntry(){
        await this.btn_saveEntry.waitForClickable()
        await this.btn_saveEntry.click()
    }

    public async verifySaveEntry(){
        await this.successNotif.isDisplayed()
    }


};

export default new dashboard();
