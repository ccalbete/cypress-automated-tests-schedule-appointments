// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { CommonPage } from './pages/CommonPage'
import { ManageAppointmentPage } from './pages/appointments/ManageAppointmentPage'
import { CreateAppointmentPage } from './pages/appointments/CreateAppointmentPage'

import { Dates } from './helpers/Dates'
const newAppointmentData = require('./../fixtures/newAppointment')

const commonPage = new CommonPage()
const manageAppointmentPage = new ManageAppointmentPage()
const createAppointmentPage = new CreateAppointmentPage()
const dateHelper = new Dates()

Cypress.Commands.add('validateAppointmentWithErrorIsNotCreated', () => { 
    commonPage.getFieldRequiredErrorMessage().should('be.visible')
    manageAppointmentPage.getAppointmentContainer().should('not.exist')
 })
 Cypress.Commands.add('createAppointment', () => { 
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