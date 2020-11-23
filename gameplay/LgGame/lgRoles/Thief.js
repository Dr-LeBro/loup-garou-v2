const LgRole = require('LgRole.js');
const Steal = require('../actions/Steal.js')

class Thief extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Thief");
    }

    nightAction(){
        Steal.doIt();
    }
}

module.exports = Thief;