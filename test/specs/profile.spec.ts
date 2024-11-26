import AllureReporter from "@wdio/allure-reporter";
import HomePage from "../pageobjects/Home.page"
import ProfilePage from "../pageobjects/Profile.page";

describe('Profile page tests', () => {
    it('Check if profile page opens while navigate via user profile from home page', async () => {
        await HomePage.openHomePage();

        await HomePage.loginToAccount('testUser', 'testPass111', '', '')

        await HomePage.clickUserProfileBtn();

        await AllureReporter.step('Check if user is on Profile page', async () => {
            await expect(ProfilePage.usernameProfileInput).toBeDisplayed();
        })
    })
})