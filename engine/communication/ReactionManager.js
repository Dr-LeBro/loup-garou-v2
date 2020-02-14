const Reaction = require('./Reaction.js');

class ReactionManager{

    constructor(messageToManage = null){
        this.message = messageToManage;
        this.sendedByBot = [];
    }

    linkMsg(message){
        this.message = message;
    }

    /**
     * 
     * @param {Reaction.Reactions} reaction 
     */
    addReaction(reaction){
        this.message.react(reaction);
        this.sendedByBot.push(reaction);
    }

    get reactions(){
        this.message.reactions;
    }

}

module.exports = ReactionManager;