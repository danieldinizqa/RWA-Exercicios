describe('Visualizar Histórico de Transações', () => {

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('/signin');
    cy.get('#username').type('Heath93'); 
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();

    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test^="transaction-item"]', { timeout: 10000 }).should('have.length.at.least', 1);
  });

  it('Deve validar o fluxo de boas-vindas para novo usuário', () => {
    const newUser = 'user_qa_' + Math.floor(Math.random() * 10000);
    
    // 1. Registro e Login (Rápido)
    cy.visit('/signup');
    cy.get('#firstName').type('Daniel');
    cy.get('#lastName').type('QA');
    cy.get('#username').type(newUser);
    cy.get('#password').type('s3cret');
    cy.get('#confirmPassword').type('s3cret');
    cy.get('[data-test="signup-submit"]').click();

    cy.get('#username').type(newUser);
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();

    // 2. Onboarding - A parte crítica
    // Espera o modal e clica em Next
    cy.get('[data-test="user-onboarding-dialog"]').should('be.visible');
    cy.get('[data-test="user-onboarding-next"]').click();

    // VALIDAÇÃO SIMPLIFICADA: 
    // Em vez de ID, vamos usar o atributo 'name' ou 'placeholder', que são mais estáveis no RWA
    cy.get('input[name="bankName"]', { timeout: 10000 }).should('be.visible').type('Banco Real');
    cy.get('input[name="routingNumber"]').type('123456789');
    cy.get('input[name="accountNumber"]').type('987654321');
    
    cy.get('[data-test="bankaccount-submit"]').click();

    // 3. Finalização
    // Espera o botão de "Done" ou "Next" final aparecer
    cy.get('[data-test="user-onboarding-next"]', { timeout: 10000 }).should('be.visible').click();
    
    // Asserção final: Se o modal sumiu, o teste passou!
    cy.get('[data-test="user-onboarding-dialog"]').should('not.exist');
    cy.get('[data-test="sidenav-user-balance"]').should('be.visible');
  });

});