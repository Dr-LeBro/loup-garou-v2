

exports.run = async (bot, data, args) => { // This function takes three arguments, the bot (client) message (full message with prefix etc.) and args (Arguments of command)
    data.channel.send('test dans la console');
    guildId = data.guild.id;
    /*
    if(_gameVars[guildId]["votingSession"]["currentMsg"] != null){
      console.log(_gameVars[guildId]["votingSession"]["currentMsg"]);
      _gameVars[guildId]["votingSession"]["currentMsg"].edit("+1");
    }
    data.channel.send("votes en cours").then(message =>{
      _gameVars[guildId]["votingSession"]["currentMsg"] = message;
    });
    */
    console.log(_gameVars[guildId]["channels"]);
  } 
  
  exports.help = {
    name: 'test', // Nom de la commande
    command: '$test [private args]' //example de commande
  }