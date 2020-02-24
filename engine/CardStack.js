const rand = require("./utils/random.js").default;
const Card = require('./Card.js');

class CardStack{

    /**
     * 
     * @param {string} name
     * 
     * @member {string} name
     * @member {Array.<Card>} cardList
     * @member {number} topOfStack
     */
    constructor(name){
        this.name = name;
        this.cardList = new Array();
        this.topOfStack = 0;
    }

    addCards(cardList){
        id = this.cardList.length;
        cardList.forEach(element => {
            element.id = id;
            this.addCard(element, id);
            id++;
        });
    }

    addCard(card, id){
        card.setId(id);
        this.cardList.push(card);
    }

    takeRandomCard(min=0, max=this.cardList.length){
        randomIdCard = rand.randomBetween(min, max);
        return cardList[randomIdCard];
    }

    takeTopOfStack(){
        if(this.cardList.length == 0) return null;
        card = cardList[randomIdCard];
        this.topOfStack++;
        if(this.topOfStack >= this.cardList.length) this.topOfStack=0;
        return card;
    }
}

module.exports = CardStack;