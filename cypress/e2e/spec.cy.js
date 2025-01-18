describe('My First Test', () => {
    
    it('Basic fucnvtionality testing ', () => {
        cy.visit('/shop');
    
        cy.get('input').should('have.value', 0);
        cy.get('button').eq(0).should('have.text', '-');
       
        cy.get('#buttonAdd').should('have.text', '+').click(); 
        cy.get('input').should('have.value', 1);
    
        cy.get('#addToCart').should('have.text', 'Add to Cart').click();
        cy.contains('#addToCart').should('not.exist');
    
        cy.get('#delteButton').should('have.text', 'Delete')
    
        cy.get('#counter').should('have.text', '1');

        cy.log('go to Cart')
        cy.get('#shop-link').click();
        cy.url().should('include', '/cart');
	})
});