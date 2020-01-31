const cChecks = require('../engine/utils/commandsChecks.js');

exports.run = async (bot, message, args) => {
    /* trois arguments, le bot (client), le message (message avec prefix) et les args (Arguments de commandes)
        Arguments de commandes:
        - args[0] -> type du clean: all ou liste des channels séparé par des vigules
        - args[1] -> listes des channels [optionel] 
    */

    //racourcis des vars du message (message)
    let guildId = message.channel.guild.id;

    //racourcis des vars arguments de la commande
    type = args[0];
    channelsCompactList = args[1];

    //autres variables
    let channelsList = [];
    // si "all" alors clean tous les chans
    if(type == "all"){
        bot.channels.forEach(channel => {
            if(channel.type == 'text' && channel.guild.id == guildId){
                channelsList.push(channel);
            }
        });
    }else if(type == "channels"){//si channels alors parcourt de la liste
        channelsListName = channelsCompactList.split(",");
        channelsListName.forEach(channelName => {
            let channel = bot.channels.find(channel => channel.name == channelName && channel.guild.id == guildId);
            if(channel != null){
                channelsList.push(channel);
            }
        });
    }else{
        channelsList.push(message.channel);
    }
    channelsList.forEach(channel => {
        channel.bulkDelete(100, ()=>true);
    });
} 
  
exports.help = {
    name: 'clean', // nom de la commande
    command: "$clean {all/channels} [channel1,channel2,channel3,...]",
    details: "{} is an optional parameter which clean all text channels if you type 'all' or the all specified text channels that you type separated by space"
}