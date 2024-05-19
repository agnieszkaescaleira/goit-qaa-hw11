describe('Login Tests', () => {
    it('Test 1 - Log in with user888@gmail.com and log out', () => {
        cy.login('user888@gmail.com', '1234567890');

        // Znajdź przycisk w prawym górnym rogu
        cy.get('#open-navigation-menu-mobile').click();

        // Znajdź przycisk Log out w menu i kliknij na niego
        cy.contains('Log out').click();

        // Upewnij się, że wrócono do strony logowania
        cy.url().should('include', '/account/login');
    });

    it('Test 2 - Log in with testowyqa@qa.team and log out', () => {
        cy.login('testowyqa@qa.team', 'QA!automation-1');

        // Znajdź przycisk w prawym górnym rogu
        cy.get('#open-navigation-menu-mobile').click();
        // Znajdź przycisk Log out w menu i kliknij na niego
        cy.contains('Log out').click();

        // Upewnij się, że wrócono do strony logowania
        cy.url().should('include', '/account/login');
    });
});