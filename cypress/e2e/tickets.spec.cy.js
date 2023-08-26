describe ("Tickets", () => {

    beforeEach (() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));

    it("TC01 - Input First and Last Name", () => {
        const firstName = 'Samuel';
        const lastName = 'Luciano';
        const fullName = `${firstName} ${lastName}`

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('.agreement p').should('contain', `I, ${fullName}, wish to buy`);

    });

    it("TC02 - Compra de Ingresso Full", () => {
        const firstName = 'Samuel';
        const lastName = 'Luciano';
        const email = 'samuel019@gmail.com'
        const textFull = 'Text Text'+ 
        'Text Text';
        const fullName = `${firstName} ${lastName}`

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#ticket-quantity').select("2");
        cy.get('#vip').check();
        cy.get('#publication').check();
        cy.get('#requests').type(textFull, { delay: 0});

        cy.get('.agreement p').should('contain', `I, ${fullName}, wish to buy`);

        cy.get('#agree').check();
        cy.get('#signature').type(fullName, { delay: 0});

        cy.get("button[type='submit']").click();
        cy.get('.success').should('be.visible');
        cy.get('.success').should('have.text', 'Ticket(s) successfully ordered.');

    });


    it.only("TC03 - Compra de Ingresso Campos Obrigatórios", () => {
        const user = {
            firstName: 'Samuel',
            lastName: 'Luciano',
            email: 'samuel017@gmail.com'
        }
        
        cy.filMandatory(user);

        cy.get("button[type='submit']").click();
        cy.get('.success').should('be.visible');
        cy.get('.success').should('have.text', 'Ticket(s) successfully ordered.');

    });
});