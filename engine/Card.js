class Card{

    /**
     * 
     * @param {string} [name="card_name"]
     * 
     * @member {name} name
     * @member {number} id
     * @member {boolean} usable
     * @member {boolean} pickable
     */
    constructor(name = "card_name"){
        this.name = name;
        this.id = -1;
        this.isUsable = true;
        this.isPickable = true;
    }

    setId(newId){
        this.id = newId;
    }

    set isUsable(newBool){
        this.usable = newBool;
    }

    get isUsable(){
        return this.usable;
    }

    set isPickable(newBool){
        this.pickable = newBool;
    }

    get isPickable(){
        return this.pickable;
    }
}

module.exports = Card;