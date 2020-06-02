const LgRole = require('LgRole.js');
const Spy = require('../actions/Spy.js')

class Little_girl extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Little_girl");
    }

    nightAction(){
        Spy.doIt();
    }
}

module.exports = Little_girl;