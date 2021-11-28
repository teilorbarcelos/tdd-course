describe('devbook application', () => {
  it('visits the devbook', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('DevBook')
  })

  it('shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="bookList"]').should('exist')
    cy.get('div.bookItem').should((books) => {
      expect(books).to.have.length(2)
      const titles = [...books].map(book => book.querySelector('h5').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})