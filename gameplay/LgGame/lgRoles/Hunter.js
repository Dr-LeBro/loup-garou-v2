const LgRole = require('LgRole.js');
const Kill = require('../actions/Kill.js');

class Hunter extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Hunter");
    }

    DayAction(){
        Kill.doIt();
    }
}

module.exports = Hunter;