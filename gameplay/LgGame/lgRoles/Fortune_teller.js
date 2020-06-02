const LgRole = require('LgRole.js');
const Read = require('../actions/ReadCharacter.js')

class Fortune_teller extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Fortune_teller");
    }

    nightAction(){
       Read.doIt();
    }
}

module.exports = Fortune_teller;