const Card = require('../../../../engine/Card.js');

class LgRole extends Card{

    /**
     * 
     * @param {String} name - name of card/role
     */
    constructor(name){
        super(name);
        this._usable = false;
        this._pickable = false;
    }
}

module.exports = LgRole;