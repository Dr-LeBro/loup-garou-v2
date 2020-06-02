const LgRole = require('LgRole.js');

class Shaman extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Shaman");
    }

    nightAction(){
        //action qui lui permet de voir le tchat des morts
    }
}

module.exports = Shaman;