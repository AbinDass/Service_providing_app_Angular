describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    // cy.contains('app is running!')
    cy.contains('X').click()
    cy.contains('sign in').click()
    cy.get('#email').type('sahad@gmail.com');
    cy.get('#password').type('123456789');
    cy.contains('log in').click()
    // cy.get('#signin').click();
    cy.wait(1000);
    cy.window().then((window) => {
      const token = window.localStorage.getItem('token');
      expect(token).to.not.be.null;
    }); 
    cy.wait(3000)  
    // cy.contains('Ernakulam').click();
    cy.contains('Get Start').click();
    cy.contains('See All').click();
  })
})
