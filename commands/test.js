const ChannelManager = require('../engine/interface/ChannelManager.js');
const MessageManager = require('../engine/communication/MessageManager.js');
const Reaction = require('../engine/communication/Reaction.js');

exports.run = async (bot, data, args) => { // This function takes three arguments, the bot (client) message (full message with prefix etc.) and args (Arguments of command)
    guildId = data.guild.id;
    var managedChannel = ChannelManager.ManageCreatedChannel(data.channel);
    var message = new MessageManager("test");
    managedChannel.sendMessage(message);

    var managedCat = new ChannelManager(ChannelManager.ChannelType.CATEGORY, "catTest");
    managedCat.create(data.guild).then(cat=>{
      var managedChannel = new ChannelManager(ChannelManager.ChannelType.TEXT, "test", [], cat);
      managedChannel.create(data.guild).then(channel=>{
        var message = new MessageManager(Reaction.Reactions.OK);
        message.addReaction(Reaction.Reactions.ARROW_RIGHT);
        message.addReaction(Reaction.Reactions.FOUR);
        message.addReaction(Reaction.Reactions.NINE);
        managedChannel.sendMessage(message);

      });
      setTimeout(function(){
        managedChannel.remove();
        setTimeout(function(){
          managedCat.remove();
        }, 1000);
      }, 10000);
    });
  } 
  
  exports.help = {
    name: 'test', // Nom de la commande
    command: '$test [private args]' //example de commande
  }