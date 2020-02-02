const ChannelManager = require('../engine/interface/ChannelManager.js');

exports.run = async (bot, data, args) => { // This function takes three arguments, the bot (client) message (full message with prefix etc.) and args (Arguments of command)
    guildId = data.guild.id;
    var managedChannel = ChannelManager.ManageCreatedChannel(data.channel);
    managedChannel.sendMessage("test dans la console");

    var managedCat = new ChannelManager(ChannelManager.ChannelType.CATEGORY, "catTest");
    managedCat.create(data.guild).then(cat=>{
      var managedChannel = new ChannelManager(ChannelManager.ChannelType.TEXT, "test", [], cat);
      managedChannel.create(data.guild).then(channel=>{
        managedChannel.sendMessage("YESSSSSSSSS");
      });
      setTimeout(function(){
        managedChannel.remove();
        setTimeout(function(){
          managedCat.remove();
        }, 1000);
      }, 3000);
    });
  } 
  
  exports.help = {
    name: 'test', // Nom de la commande
    command: '$test [private args]' //example de commande
  }