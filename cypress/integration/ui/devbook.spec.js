describe('devbook application', () => {
  it('visits the devbook', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('DevBook')
  })
})