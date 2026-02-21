describe('Fluxo de Envio de Dinheiro', () => {

  beforeEach(() => {
    // Login antes de cada teste de transação
    cy.visit('/signin');
    cy.get('#username').type('Heath93'); // Use o usuário válido da sua máquina
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    
    // Clica no botão de "New Transaction" (ícone de cifrão ou botão superior)
    cy.get('[data-test="nav-top-new-transaction"]').click();
  });

  it('Deve enviar dinheiro com sucesso', () => {
    // 1. Selecionar um contato da lista (ex: primeiro da lista)
    cy.get('[data-test="users-list"] li').first().click();

    // 2. Preencher o valor e a nota
    cy.get('#amount').type('50');
    cy.get('#transaction-create-description-input').type('Pagamento de teste Cypress');
    
    // 3. Clicar em "Pay"
    cy.get('[data-test="transaction-create-submit-payment"]').click();

    // Asserção: Verificar mensagem de sucesso
    cy.get('.MuiAlert-message').should('be.visible').and('contain', 'Transaction Submitted');
  });

  it('Deve exibir mensagem de erro ao enviar dinheiro sem preencher campos', () => {
    // Selecionar um contato
    cy.get('[data-test="users-list"] li').first().click();

    // Tentar clicar em Pay sem valor ou descrição
    // O botão deve estar desabilitado se o formulário estiver vazio
    cy.get('[data-test="transaction-create-submit-payment"]').should('be.disabled');
  });
});