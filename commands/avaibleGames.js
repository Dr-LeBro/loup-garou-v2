const ChannelManager = require('../engine/interface/ChannelManager.js');
const MessageManager = require('../engine/communication/MessageManager.js');
const Reaction = require('../engine/communication/Reaction.js');
const Game = require('../engine/Game.js')

exports.run = async (bot, data, args) => { // This function takes three arguments, the bot (client) message (full message with prefix etc.) and args (Arguments of command)
    guildId = data.guild.id;
    var managedChannel = ChannelManager.ManageCreatedChannel(data.channel);
    var message = new MessageManager(Game.avaibleGames);
    managedChannel.sendMessage(message);
}
  exports.help = {
    name: 'avaibleGames', // Nom de la commande
    command: '$avaibleGames' //example de commande
  }