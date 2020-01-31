class Card{
    constructor(name = "card_name"){
        this.name = name;
        this.id = -1;
    }

    setId(newId){
        this.id = newId;
    }
}

module.exports = Card;