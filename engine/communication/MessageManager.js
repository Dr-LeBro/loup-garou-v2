const ReactionManager = require('./ReactionManager.js');

class MessageManager{
    //TODO: construct messagemannager CLASS to better message construction

    /**
     * 
     * @param {string} messageContent 
     */
    constructor(messageContent){
        this.messageContent = messageContent; //content of message
        this.sendedMessage = null;
        this.reactionManager = new ReactionManager();
    }

    addReaction(reaction){
        this.reactionManager.addReaction(reaction);
    }

    async sendMessage(channel){
        this.sendedMessage = await channel.send(this.messageContent);
        this.reactionManager.linkMsg(this.sendedMessage);
    }

}

module.exports = MessageManager;