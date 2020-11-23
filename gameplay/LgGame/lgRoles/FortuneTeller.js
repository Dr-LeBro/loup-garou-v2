const LgRole = require('LgRole.js');
const Read = require('../actions/ReadCharacter.js')

class FortuneTeller extends LgRole{
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

module.exports = FortuneTeller;