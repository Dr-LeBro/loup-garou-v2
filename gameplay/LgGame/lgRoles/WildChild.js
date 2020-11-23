const LgRole = require('LgRole.js');

class Wild_child extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Wild_child");
    }

    nightAction(){
        //action qui lui permet de voir le tchat des morts
    }
}

module.exports = Wild_child;