
export class Dates {
    moment = require('moment')

    constructor(){}
    getValidAppointmentDate(){
        return this.moment().add(2, 'days').format('YYYY-MM-DD')
    }
}