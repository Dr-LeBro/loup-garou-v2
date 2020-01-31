exports.run = async (bot, data, args) => {
    /* trois arguments, le bot (client), le message (message avec prefix) et les args (Arguments de commandes)
        Arguments de commandes: aucun
    */

    let messageContent = "Here is the list of all commands that are avaible: ```";
    commands = bot.commands.array();
    
    //affiche la liste des commandes
    for(let commandId in commands){
        messageContent += "- "+commands[commandId].help.command+"\n"; 
        if(commands[commandId].help.details != null){
            messageContent += "\t"+commands[commandId].help.details+"\n";
        }
    }
    messageContent += "```";
    data.channel.send(messageContent);
} 
  
  exports.help = {
    name: 'help', // Nom de la commande
    command: '$help' //example de commande
  }