describe('Discover', () => {
  beforeEach(() => {
    cy.visit('/discover')
  })
  it('can enter an amount into input', () => {
    cy.get('#discover-currency-input .token-amount-input').type('0.001', { delay: 200 }).should('have.value', '0.001')
  })

  it('zero discover amount', () => {
    cy.get('#discover-currency-input .token-amount-input').type('0.0', { delay: 200 }).should('have.value', '0.0')
  })

  it('invalid discover amount', () => {
    cy.get('#discover-currency-input .token-amount-input').type('\\', { delay: 200 }).should('have.value', '')
  })

  it('can enter an amount into output', () => {
    cy.get('#discover-currency-output .token-amount-input').type('0.001', { delay: 200 }).should('have.value', '0.001')
  })

  it('zero output amount', () => {
    cy.get('#discover-currency-output .token-amount-input').type('0.0', { delay: 200 }).should('have.value', '0.0')
  })

  it.skip('can discover ETH for DAI', () => {
    cy.get('#discover-currency-output .open-currency-select-button').click()
    cy.get('.token-item-0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735').should('be.visible')
    cy.get('.token-item-0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735').click({ force: true })
    cy.get('#discover-currency-input .token-amount-input').should('be.visible')
    cy.get('#discover-currency-input .token-amount-input').type('0.001', { force: true, delay: 200 })
    cy.get('#discover-currency-output .token-amount-input').should('not.equal', '')
    cy.get('#discover-button').click()
    cy.get('#confirm-discover-or-send').should('contain', 'Confirm Discover')
  })

  it.skip('add a recipient does not exist unless in expert mode', () => {
    cy.get('#add-recipient-button').should('not.exist')
  })

  describe('expert mode', () => {
    beforeEach(() => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('confirm')
      })
      cy.get('#open-settings-dialog-button').click()
      cy.get('#toggle-expert-mode-button').click()
      cy.get('#confirm-expert-mode').click()
    })

    it.skip('add a recipient is visible', () => {
      cy.get('#add-recipient-button').should('be.visible')
    })

    it.skip('add a recipient', () => {
      cy.get('#add-recipient-button').click()
      cy.get('#recipient').should('exist')
    })

    it.skip('remove recipient', () => {
      cy.get('#add-recipient-button').click()
      cy.get('#remove-recipient-button').click()
      cy.get('#recipient').should('not.exist')
    })
  })
})
