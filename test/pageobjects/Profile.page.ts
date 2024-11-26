import { type ChainablePromiseElement } from 'webdriverio';
import { Page } from "./Page";

class ProfilePage extends Page {
    public get usernameProfileInput (): ChainablePromiseElement {
        return $('[name="username"]')
    }

    public async isUsernameProfileInputDisplayed (): Promise<void> {
        await expect(this.usernameProfileInput).toBeDisplayed();
    }
}

export default new ProfilePage();
