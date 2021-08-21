describe('Web Sprint Single Page Applications', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const phoneInput = () => cy.get('input[name=phone]')
    const submitButton = () => cy.get(`button[id='submitButton']`)
    const sauceInput =() => cy.get('input[name=sauce]')
    const specialInput = () => cy.get('input[name=special]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const sausage = () => cy.get('input[name=sausage]')
    const canadianBacon = () => cy.get('input[name=canadianBacon]')
    const spicyItalianSausage = () => cy.get('input[name=spicyItalianSausage]')
    const grilledChicken = () => cy.get('input[name=grilledChicken]')
    const onions = () => cy.get('input[name=onions]')
    const greenPepper = () => cy.get('input[name=greenPepper]')
    const dicedTom = () => cy.get('input[name=dicedTom]')
    const blackOlives = () => cy.get('input[name=blackOlives]')
    const roastedGarlic = () => cy.get('input[name=roastedGarlic]')
    const artHearts = () => cy.get('input[name=artHearts]')
    const threeCheese = () => cy.get('input[name=threeCheese]')
    const pineapple = () => cy.get('input[name=pineapple]')
    const xtraCheese = () => cy.get('input[name=xtraCheese]')
    const quantityInput = () => cy.get('input[name=quantity]')
    
    // const pizzaButton = () => cy.get('input[id=order-pizza]')

    it('Sanity Check', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('Proper elements exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        phoneInput().should('exist')
        submitButton().should('exist')
        sauceInput().should('exist')
        specialInput().should('exist')
        sizeInput().should('exist')
        pepperoni().should('exist')
        sausage().should('exist')
        canadianBacon().should('exist')
        spicyItalianSausage().should('exist')
        grilledChicken().should('exist')
        onions().should('exist')
        greenPepper().should('exist')
        dicedTom().should('exist')
        blackOlives().should('exist')
        roastedGarlic().should('exist')
        artHearts().should('exist')
        threeCheese().should('exist')
        pineapple().should('exist')
        xtraCheese().should('exist')
    })

    describe('Checking for input typing', () => {
        it('First name typing', () => {
            nameInput()
                .should('have.value', '')
                .type('Mason Mostella')
                .should('have.value', 'Mason Mostella')
            })
        it('Email typing', () => {
            emailInput()
                .should('have.value', '')
                .type('most2045@gmail.com')
                .should('have.value', 'most2045@gmail.com')
            })
        it('Phone number typing', () => {
            phoneInput()
                .should('have.value', '')
                .type('2567444684')
                .should('have.value', '2567444684')
                })
    })

    describe('Checking toppings', () => {
        it('sausage checks', () => {
            sausage()
                .should('not.be.checked')
                .click()
                .should('be.checked')
        })
        it('Spicy italian sausage checks', () => {
            spicyItalianSausage()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
        it('Onions checks', () => {
            onions()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
        it('Diced tomatoes checks', () => {
            dicedTom()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
        it('Roasted Garlic checks', () => {
            roastedGarlic()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
        it('Three Cheese checks', () => {
            threeCheese()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
        it('Extra Cheese checks', () => {
            xtraCheese()
                    .should('not.be.checked')
                    .click()
                    .should('be.checked')
                })
    })

    describe('Testing submit', () => {
        it('Submit is disabled', () => {
            submitButton().should('be.disabled')
            sizeInput().select('8inch')
            sauceInput().check('red')
            nameInput().type('Mason')
            emailInput().type('mason@mason.com')
            phoneInput().type('2587894563')
            quantityInput().type('1')
            submitButton().should('not.be.disabled')
        })
    })
})