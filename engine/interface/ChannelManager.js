const Interface = require('./Interface.js');
const MessageManager = require('../communication/MessageManager.js');

class ChannelManager extends Interface{

    /**
     * @enum {String}
     */
    static ChannelType = {
        TEXT: "text",
        VOICE: "voice",
        CATEGORY: "category",
    }

    /**
     * @static
     * 
     * @param {Channel} currentChannel 
     */
    static ManageCreatedChannel(currentChannel){
        if(Object.values(ChannelManager.ChannelType).includes(currentChannel.type)){
            return new ChannelManager(currentChannel.type, currentChannel.name, currentChannel.permissionOverwrite, currentChannel.parent, currentChannel);
        }else{
            return null;
        }
    }

    /**
     * @constructor
     * @this {ChannelManager}
     * 
     * @param {String} name 
     * @param {Array<ChannelCreationOverwrites>} permissions
     * @param {CategoryChannel} parent 
     * @param {ChannelType} type 
     */
    constructor(type=ChannelManager.ChannelType.TEXT, name="??", permissions = [], parent = null, channel = null){
        super(name, permissions);
        this.channel = channel;
        this.parent = parent;
        if(Object.values(ChannelManager.ChannelType).includes(type)){
            this.type = type;
        }else{
            this.type = Channel.ChannelType.TEXT;
        }
    }

    async create(guild, force = false){
        //TODO: verifier si le channel existe déjà
        if(this.channel != null) throw "channel already created";
        if(guild == null) throw "guild not specified"
        var promise = guild.createChannel(this.name, {"type": this.type, "parent": this.parent, "permissionOverwrites": this.permissions});           
        await promise.then(async channel => {
            this.channel = channel;
        });
        return this.channel;
    }

    remove(){
        this.channel.delete();
        this.channel = null;
    }

    /**
     * 
     * @param {MessageManager} message 
     */
    async sendMessage(message){
        if(this.type != ChannelManager.ChannelType.TEXT) throw "This is not a text channel"
        if(message.constructor.name != MessageManager.name) throw "Message not sended: "+ message.messageContent;
        message.sendedMessage = await this.channel.send(message.messageContent);
    }
}

module.exports = ChannelManager;