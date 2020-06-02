const LgRole = require('LgRole.js');
const Kill = require('../actions/Kill.js');
const Save = requite('../actions/Save.js');


class Witch extends LgRole{

    /**
     * 
     */
    constructor(){
        super("Witch");
    }

    nightAction(){
        Kill.doIt();
        Save.doIt();
    }
}

module.exports = Witch;