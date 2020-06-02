const LgRole = require('LgRole.js');

class Raven extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Raven");
    }

    nightAction(){
        //action qui lui permet de voir le tchat des morts
    }
}

module.exports = Raven;