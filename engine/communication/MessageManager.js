const ReactionManager = require('./ReactionManager.js');

class MessageManager{
    //TODO: construct messagemannager CLASS to better message construction

    constructor(messageContent){
        this.messageContent = messageContent; //content of message
        this.sendedMessage = null;
        this.reactionManager = new ReactionManager();
    }

    addReaction(reaction){
        this.reactionManager.linkMsg(this.sendedMessage);
        this.reactionManager.addReaction(reaction);
    }

}

module.exports = MessageManager;