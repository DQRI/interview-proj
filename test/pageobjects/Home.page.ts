import { type ChainablePromiseElement, type ChainablePromiseArray } from "webdriverio";
import { Page } from "./Page";
import AllureReporter from "@wdio/allure-reporter";

class HomePage extends Page {
    public get UserProfileBtn (): ChainablePromiseElement {
        return $('//div(text()=account')
    }
    
    public get banners (): ChainablePromiseArray {
        return $$('.hsWEfh')
    }

    public async clickUserProfileBtn (): Promise<void> {
        await AllureReporter.step('Click user profile button', async () => {
            await this.UserProfileBtn.click();
        })
    }

    public async openHomePage (): Promise<void> {
        await browser.url('/')
    }
}

export default new HomePage();
