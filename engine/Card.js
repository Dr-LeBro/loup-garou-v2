class Card{

    /**
     * @constructor
     * @this {Card} - instance of a card
     * 
     * @param {string} [name="card_name"]
     * 
     * @member {name} name - name of card
     * @member {number} id - id of card
     * @member {boolean} _usable - if card can be used
     * @member {boolean} _pickable - if card can be picked
     */
    constructor(name = "card_name"){
        this.name = name;
        this.id = -1;
        this._usable = true;
        this._pickable = true;
    }

    setId(newId){
        this.id = newId;
    }

    get isUsable(){
        return this._usable && id != -1;
    }

    get isPickable(){
        return this._pickable && id != -1; 
    }
}

module.exports = Card;