describe('Login', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/signin');
    cy.get('#username').type('Heath93');
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    
    // Asserção: Verificar se fomos redirecionados para a home ou se o nome do usuário aparece
    cy.get('[data-test="sidenav-username"]').should('be.visible');
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('/signin');
    cy.get('#username').type('usuario_errado');
    cy.get('#password').type('senha_errada');
    cy.get('[data-test="signin-submit"]').click();

    // Asserção: Verificar mensagem de erro
    cy.get('.MuiAlert-message').should('be.visible');
  });
});