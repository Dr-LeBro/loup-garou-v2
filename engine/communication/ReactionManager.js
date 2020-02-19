const Reaction = require('./Reaction.js');

class ReactionManager{

    constructor(messageToManage = null){
        this.message = messageToManage;
        this.sendedByBot = [];
        this.buffer = [];
    }

    linkMsg(message){
        this.message = message;
        if(this.buffer.length > 0){
            this.buffer.forEach(reaction=>{
                this.addReaction(reaction);
            });
        }
    }

    /**
     * 
     * @param {Reaction.Reactions} reaction 
     */
    addReaction(reaction){
        if(this.message != null && this.sendedByBot.indexOf(reaction) == -1){
            if(this.sendedByBot.indexOf(reaction) == -1){
                this.message.react(reaction);
                this.sendedByBot.push(reaction);
            }
        }else{
            this.buffer.push(reaction);
        }
    }

    get reactions(){
        this.message.reactions;
    }

}

module.exports = ReactionManager;