describe('should find H1', () => {
  it('It gets the text: Find your favorite Digimon!', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Find your favorite Digimon!')
  })

  it('Should get the text: Search for a Digimon by name, level, or both', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Search for a Digimon by name, level, or both')
  })

  it('Should get the input', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="inputsearch"]').as('inputField')
    cy.get('@inputField').type('Agumon')
    cy.get('@inputField').should('have.value', 'Agumon')
  })

  it('Should verify for search button', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':button').should('be.disabled')
  })

  it('Should verify for level button', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Level')
  })

  it('Searches by typing and clicking the button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="inputsearch"]').should('be.visible').type('Agumon')
    cy.get('#search_button').click()
    cy.contains('Agumon')
    cy.contains('Pagumon')
    cy.contains('SnowAgumon')
  })

  it('Selects a level from the dropdown and performs a search', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="inputsearch"]').type('Agumon')
    cy.get('.dropdown').click()
    cy.get('.dropdown-content')
    cy.get('.dropdown-content').contains('Rookie').click({ force: true })
    cy.get('#search_button').click()
    cy.contains('Rookie')
    cy.contains('Agumon')
    cy.contains('SnowAgumon')
  })
})
