const LgRole = require('LgRole.js');

class Elder extends LgRole{
    /**
     * 
     */
    constructor(){
        super("Elder");
    }

    nightAction(){
        // action qui le fait survivre si il se fait attaqué par les loup mais il détruit tout les pouvoirs si il se fait voter
    }
}

module.exports = Elder;