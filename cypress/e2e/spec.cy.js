describe('get to home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show home page', () => {
    // You can add assertions here if needed
  });

  it('should show home page title', () => {
    cy.get('.fw-bolder', { timeout: 10000 }).should('contain', 'Glam Squad Haven');
  });
});