import { CreateAppointmentPage } from './../../support/pages/appointments/CreateAppointmentPage'
import { ManageAppointmentPage } from '../../support/pages/appointments/ManageAppointmentPage'
import { CommonPage } from '../../support/pages/CommonPage'

import { Dates } from './../../support/helpers/Dates'
const newAppointmentData = require('./../../fixtures/newAppointment')
const env = require('./../../fixtures/env.json')

describe('create appointments spec', () => {
  const createAppointmentPage = new CreateAppointmentPage()
  const manageAppointmentPage = new ManageAppointmentPage()
  const commonPage = new CommonPage()
  const dateHelper = new Dates()

  beforeEach(() => {
    cy.visit(env.baseUrl)
  })
  it('Create an appointment with correct data', () => {
    const data = newAppointmentData[0]
    manageAppointmentPage.getAppointmentContainer().should('not.exist')
    createAppointmentPage.getPetNameInput().type(data.petName)
    createAppointmentPage.getOwnerNameInput().type(data.ownerName)
    createAppointmentPage.getDatePicker().type(dateHelper.getValidAppointmentDate())
    createAppointmentPage.getTimePicker().type(data.time)
    createAppointmentPage.getSymptomsInput().type(data.symptoms)
    createAppointmentPage.getCreateButton().click()
    manageAppointmentPage.getAppointmentContainer().should('be.visible')
  })
  it('Create an appointment with missing data', () => {
    const data = newAppointmentData[1]
    manageAppointmentPage.getAppointmentContainer().should('not.exist')

    createAppointmentPage.getPetNameInput().type(data.petName)
    createAppointmentPage.getCreateButton().click()
    commonPage.getFieldRequiredErrorMessage().should('be.visible')
    manageAppointmentPage.getAppointmentContainer().should('not.exist')

    createAppointmentPage.getOwnerNameInput().type(data.ownerName)
    createAppointmentPage.getCreateButton().click()
    cy.validateAppointmentWithErrorIsNotCreated()

    createAppointmentPage.getDatePicker().type(dateHelper.getValidAppointmentDate())
    createAppointmentPage.getCreateButton().click()
    cy.validateAppointmentWithErrorIsNotCreated()

    createAppointmentPage.getTimePicker().type(data.time)
    createAppointmentPage.getCreateButton().click()
    cy.validateAppointmentWithErrorIsNotCreated()

    createAppointmentPage.getSymptomsInput().type(data.symptoms)
    createAppointmentPage.getCreateButton().click()
    commonPage.getFieldRequiredErrorMessage().should('not.exist')
    manageAppointmentPage.getAppointmentContainer().should('be.visible')
  })

})