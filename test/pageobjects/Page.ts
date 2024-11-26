import { type ChainablePromiseElement } from 'webdriverio';
import AllureReporter from '@wdio/allure-reporter';

export class Page {
    public get HeaderLoginBtn (): ChainablePromiseElement {
        return $('.login-btn');
    }
    public get HeaderSignUpBtn (): ChainablePromiseElement {
        return $('.SfnA2f');

    }

    public get usernameInput (): ChainablePromiseElement {
        return $('[name="username"]');
    }

    public get passwordInput (): ChainablePromiseElement {
        return $('[name="password"]')
    }

    public get loginBtn (): ChainablePromiseElement {
        return $('.bZwrS')
    }

    public get headerDepositBtn (): ChainablePromiseElement {
        return $('.deposit')
    }

    public async loginToAccount (username: string, password: string, invalidUsername: string, invalidPassword: string): Promise<void> {
        const loginUsername = username ?? invalidUsername
        const loginPassword = password ?? invalidPassword

        await AllureReporter.step('Login to account', async () => {
            await this.HeaderLoginBtn.click();
            await this.usernameInput.setValue(loginUsername)
            await this.passwordInput.setValue(loginPassword)
            await this.loginBtn.click();

            await this.headerDepositBtn.waitForDisplayed();
        })
    }
}