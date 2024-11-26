import AllureReporter from "@wdio/allure-reporter";
import HomePage from "../pageobjects/Home.page"
import ProfilePage from "../pageobjects/Profile.page";

describe('Home page tests', () => {
    it('Transition to Profile page', async () => {
        await HomePage.openHomePage();

        await HomePage.loginToAccount('testUser', 'testPass111', '', '')

        await HomePage.clickUserProfileBtn();

        await ProfilePage.isUsernameProfileInputDisplayed();
    })

    it('Banners equal to 5', async () => {
        await HomePage.openHomePage();

        await AllureReporter.step('Check if banners equal to 5', async () => {})
       await expect(await HomePage.banners.length).toEqual(5)
    })
})