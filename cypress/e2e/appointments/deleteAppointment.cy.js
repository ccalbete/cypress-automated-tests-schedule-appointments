import { ManageAppointmentPage } from '../../support/pages/appointments/ManageAppointmentPage'

const env = require('./../../fixtures/env.json')

describe('delete appointments spec', () => {
  const manageAppointmentPage = new ManageAppointmentPage()

  beforeEach(() => {
    cy.visit(env.baseUrl)
  })
  it('delete an appointment', () => {
    cy.createAppointment()
    manageAppointmentPage.getAppointmentContainer().should('be.visible')
    manageAppointmentPage.getThereAreNotAppointmentsTitle().should('contain', 'Manage your appointments')

    manageAppointmentPage.getDeleteButton().click()
    manageAppointmentPage.getThereAreNotAppointmentsTitle().should('contain', 'There are no appointments')
    manageAppointmentPage.getAppointmentContainer().should('not.exist')
  })
  
})