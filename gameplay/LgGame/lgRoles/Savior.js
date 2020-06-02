const LgRole = require('LgRole.js');
const Protect = require('../actions/Protect.js')

class Savior extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Savior");
    }

    nightAction(){
        Protect.doIt();
    }
}

module.exports = Savior;