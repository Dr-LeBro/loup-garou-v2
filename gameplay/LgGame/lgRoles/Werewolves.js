const LgRole = require('LgRole.js');
const Kill = require('../actions/Kill.js');


class Werewolves extends LgRole{

    /**
     * 
     */
    constructor(){
        super("Werewolves");
    }

    nightAction(){
        Kill.doIt();
    }
}

module.exports = Werewolves;