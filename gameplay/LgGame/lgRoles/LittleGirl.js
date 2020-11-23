const LgRole = require('LgRole.js');
const Spy = require('../actions/Spy.js')

class LittleGirl extends LgRole{
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

module.exports = LittleGirl;