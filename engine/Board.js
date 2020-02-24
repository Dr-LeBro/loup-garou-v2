const CardStack = require('./CardStack.js');

class Board{

    /**
     * 
     * @param {boolean} haveCards 
     * @param {boolean} haveCases 
     * 
     * @member {boolean} haveCards
     * @member {boolean} haveCases
     * @member {CardStack} boardCards
     * @member {CasesStack} boardCases
     */
    constructor(haveCards=false, haveCases=false){
        this.haveCards = haveCards;
        this.haveCases = haveCases;

        this.boardCards = null;
        if(this.haveCards){
            this.boardStackCards = new Array();
        }

        this.boardCases = null;
        if(this.haveCases){
            this.boardCases = new Array();
        }
    }

    newCardsList(cardList){
        if(!this.haveCards) return -1;
        return this.boardStackCards.push(new CardStack(cardList));
    }

    /**
     * 
     * @param {number} id 
     */
    getCardStack(id){
        return this.boardStackCards[id];
    }

    /**
     * 
     * @param {string} name 
     */
    getCardStack(name){
        return this.boardStackCards.find(element => element.name == name);;
    }


}

module.exports = Board;