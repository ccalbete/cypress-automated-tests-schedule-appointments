export class CreateAppointmentPage {
    constructor(){}
    getPetNameInput(){
        return cy.get('[data-testid=pet]')
    }
    getOwnerNameInput(){
        return cy.get('[data-testid=owner]')
    }
    getDatePicker(){
        return cy.get('[data-testid=date]')
    }
    getTimePicker(){
        return cy.get('[data-testid=time]')
    }
    getSymptomsInput(){
        return cy.get('[data-testid=symptoms]')
    }
    getCreateButton(){
        return cy.get('[data-testid=btn-submit]')
    }
}