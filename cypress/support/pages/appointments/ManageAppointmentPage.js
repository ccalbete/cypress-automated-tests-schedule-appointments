export class ManageAppointmentPage {
    constructor(){}
    getAppointmentContainer(){
        return cy.get('[data-testid=appointment')
    }
    getDeleteButton(){
        return cy.get('[data-testid=btn-delete')
    }
    getThereAreNotAppointmentsTitle(){
        return cy.get('[data-testid=dynamic-title')
    }
}