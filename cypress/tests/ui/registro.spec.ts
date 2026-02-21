describe('Registro de Usuário', () => {
  
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('/signup');

    // Preenchendo os dados de cadastro
    cy.get('#firstName').type('Daniel');
    cy.get('#lastName').type('Diniz');
    // Dica: Adicionei um número aleatório para você poder rodar o teste várias vezes sem erro de "usuário já existe"
    cy.get('#username').type('daniel_qa_' + Math.floor(Math.random() * 1000));
    cy.get('#password').type('s3cret');
    cy.get('#confirmPassword').type('s3cret');

    // Clica no botão de registro (que deve estar habilitado)
    cy.get('[data-test="signup-submit"]').should('be.enabled').click();

    // Após o registro, o sistema deve te levar para a tela de login
    cy.url().should('include', '/signin');
    cy.get('.MuiTypography-h5').should('contain', 'Sign in');
  });

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher as informações', () => {
    cy.visit('/signup');

    // Simulamos o usuário "passando" pelos campos sem digitar nada
    cy.get('#firstName').click();
    cy.get('#lastName').click();
    cy.get('#username').click();
    cy.get('#password').click();
    cy.get('#confirmPassword').click();
    
    // Clica fora para disparar as validações do formulário
    cy.get('body').click();

    // Verificando as mensagens de erro obrigatórias
    cy.get('#firstName-helper-text').should('be.visible').and('contain', 'First Name is required');
    cy.get('#lastName-helper-text').should('be.visible').and('contain', 'Last Name is required');
    cy.get('#username-helper-text').should('be.visible').and('contain', 'Username is required');

    // O botão deve permanecer desabilitado
    cy.get('[data-test="signup-submit"]').should('be.disabled');
  });
});