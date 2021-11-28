import { api } from "../../../src/services/api"

describe('devbook application', () => {
  before(() => {
    return api.delete('/books?_cleanup=true').catch((err) => err)
  })

  beforeEach(() => {
    const books = [
      { 'name': 'Refactoring', 'id': 1 },
      { 'name': 'Domain-driven design', 'id': 2 },
      { 'name': 'Building microsservices', 'id': 3 }
    ]

    return books.map(book => api.post('/books', book, {
      headers: { 'Content-type': 'application/json' }
    }))
  })

  afterEach(() => {
    return api.delete('/books?_cleanup=true').catch((err) => err)
  })

  it('visits the devbook', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('DevBook')
  })

  it('shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="bookList"]').should('exist')
    cy.get('div.bookItem').should((books) => {
      expect(books).to.have.length(3)
      const titles = [...books].map(book => book.querySelector('h5').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building microsservices'])
    })
  })
})