const LgRole = require('LgRole.js');

class Angel extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Angel");
    }

    nightAction(){
        //action qui lui permet de voir le tchat des morts
    }
}

module.exports = Angel;