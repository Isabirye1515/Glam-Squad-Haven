describe('get to contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact');
  });

  it('should show contact page', () => {
    cy.get('.text-success', { timeout: 10000 }).should('contain', 'Contact Us');
  });
  it('should have a form input field', () => {
    cy.get('#name').should('exist').focus().type('John Doe');
    cy.get('#email').should('exist').focus().type('john@example.com');
    cy.get('#number').should('exist').focus().type('1234567890');
    cy.get('#company').should('exist').focus().type('Example Corp');
    cy.get('#subject').should('exist').focus().type('Inquiry');
    cy.get('#text').should('exist').focus().type('Hello, I would like to know more about your services.');
    cy.get('#submit-button').should('exist').click();
    cy.get('#clear-button').should('exist').click();
  });
  it('should redirect to email', () => {
    cy.get('#email-link').should('exist').click({timeout: 10000 });
    cy.visit('http://localhost:3000/contact');
    
  });
});
