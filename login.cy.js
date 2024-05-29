import { login } from '../pages/login';
import { HomePage } from '../pages/HomePage';

const loginPage = new LoginPage();
constHomePage = new HomePage();

descibe('Testing the login page', () => {
    it('Test 1: should login and logout with user888@gmail.com', () => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');
        HomePage.logout();
    });
});


descibe('Testing the login page', () => {
    it('Test 1: should login and logout with testowyqa@qa.team', () => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        HomePage.logout();
    });
});