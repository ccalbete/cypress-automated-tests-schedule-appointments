export class CommonPage {
    constructor(){}
    getFieldRequiredErrorMessage(){
        return cy.get('[data-testid=alert]')
    }
}