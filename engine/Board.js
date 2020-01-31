const CardStack = require('./CardStack.js');

class Board{
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
        this.boardStackCards.push(new CardStack(cardList))
    }

    addCardsToList(cardList, listId){
        //TODO: Implementation
    }
    


}

module.exports = Board;